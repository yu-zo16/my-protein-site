'use client';

import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("all");

  const products = [
    { name: "プロテインA", price: 4500, protein: 22, rating: 4.5, image: "/public/file.svg" },
    { name: "プロテインB", price: 3400, protein: 30, rating: 3.7, image: "/public/globe.svg" },
    { name: "プロテインC", price: 5200, protein: 25, rating: 4.2, image: "/public/next.svg" },
  ];

  // ソート関数
  const sortProducts = (criteria: string) => {
    switch (criteria) {
      case "price":
        return [...products].sort((a, b) => a.price - b.price);
      case "protein":
        return [...products].sort((a, b) => b.protein - a.protein);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  // それぞれのタブで表示する商品リストを定義
  const sortedAllProducts = () => sortProducts("price"); // すべてタブの場合、料金順
  const sortedYearlyProducts = () => sortProducts("protein"); // 年間タブの場合、含有量順
  const sortedMonthlyProducts = () => sortProducts("rating"); // 月間タブの場合、口コミ順

  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold underline mb-4">商品一覧</h1>

        {/* タブの作成 */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`p-2 rounded-md transition-all duration-300 ${selectedTab === "all" ? "bg-blue-500 text-white shadow-md" : "bg-gray-200"}`}
            onClick={() => handleTabClick("all")}
          >
            すべて
          </button>
          <button
            className={`p-2 rounded-md transition-all duration-300 ${selectedTab === "yearly" ? "bg-blue-500 text-white shadow-md" : "bg-gray-200"}`}
            onClick={() => handleTabClick("yearly")}
          >
            年間
          </button>
          <button
            className={`p-2 rounded-md transition-all duration-300 ${selectedTab === "monthly" ? "bg-blue-500 text-white shadow-md" : "bg-gray-200"}`}
            onClick={() => handleTabClick("monthly")}
          >
            月間
          </button>
        </div>

        {/* すべてタブの場合 */}
        {selectedTab === "all" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">すべての商品</h2>
            {/* 料金順 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold">料金順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedAllProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>

            {/* 含有量順 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold">含有量順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedAllProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>

            {/* 口コミ順 */}
            <div>
              <h3 className="text-lg font-semibold">口コミ順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedAllProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 年間タブの場合 */}
        {selectedTab === "yearly" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">年間の商品</h2>
            {/* 料金順 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold">料金順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedYearlyProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>

            {/* 含有量順 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold">含有量順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedYearlyProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>

            {/* 口コミ順 */}
            <div>
              <h3 className="text-lg font-semibold">口コミ順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedYearlyProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 月間タブの場合 */}
        {selectedTab === "monthly" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">月間の商品</h2>
            {/* 料金順 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold">料金順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedMonthlyProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>

            {/* 含有量順 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold">含有量順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedMonthlyProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>

            {/* 口コミ順 */}
            <div>
              <h3 className="text-lg font-semibold">口コミ順</h3>
              <div className="flex overflow-x-auto space-x-4">
                {sortedMonthlyProducts().map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={`¥${product.price}`}
                    protein={product.protein}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
