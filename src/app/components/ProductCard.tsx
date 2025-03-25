import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  protein: number;
  rating: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, protein, rating, image }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <img src={image} alt={name} className="w-24 h-24 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* 横並びにするためにflexで調整 */}
      <div className="flex space-x-4 mt-2">
        <p className="text-sm text-gray-500">料金: {price}</p>
        <p className="text-sm text-gray-500">プロテイン: {protein}g</p>
        <p className="text-sm text-gray-500">口コミ: {rating}⭐</p>
      </div>
    </div>
  );
};

export default ProductCard;
