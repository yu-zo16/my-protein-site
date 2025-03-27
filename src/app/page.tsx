"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("all");

  // 型定義を修正（カラム名をDBに合わせる）
  type Product = {
    id: number;
    name: string;
    brand: string;
    price: number;
    protein_amount: number;
    image_url: string;
    rating: number;
  };

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("My-protein-site").select("*");

      if (error) {
        console.error("データ取得エラー:", error.message);
      } else {
        console.log("取得データ:", data);
        setProducts(data as Product[]);
      }
    };

    fetchProducts();
  }, []);

  const sortProducts = (criteria: string): Product[] => {
    switch (criteria) {
      case "price":
        return [...products].sort((a, b) => a.price - b.price);
      case "protein":
        return [...products].sort((a, b) => b.protein_amount - a.protein_amount);
      default:
        return products;
    }
  };

  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold underline mb-4">商品一覧</h1>

        <div className="flex space-x-4 mb-6">
          {["all", "yearly", "monthly"].map((tab) => (
            <button
              key={tab}
              className={`p-2 rounded-md transition-all duration-300 ${
                selectedTab === tab ? "bg-blue-500 text-white shadow-md" : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab === "all" ? "すべて" : tab === "yearly" ? "年間" : "月間"}
            </button>
          ))}
        </div>

        {["all", "yearly", "monthly"].includes(selectedTab) && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {selectedTab === "all" ? "すべての商品" : selectedTab === "yearly" ? "年間の商品" : "月間の商品"}
            </h2>

            {["price", "protein"].map((criteria) => (
              <div key={criteria} className="mb-8">
                <h3 className="text-lg font-semibold">
                  {criteria === "price" ? "料金順" : "タンパク質含有量順"}
                </h3>
                <div className="flex overflow-x-auto space-x-4">
                  {sortProducts(criteria).map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      price={`¥${product.price}`}
                      protein={product.protein_amount}
                      image={product.image_url}
                      rating={product.rating}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
