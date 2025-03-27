interface ProductCardProps {
  name: string;
  price: string;
  protein: number;
  rating: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, protein, rating, image }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={image} alt={name} className="w-32 h-32 object-cover" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>{price}</p>
      <p>タンパク質: {protein}g</p>
      <p>評価: ⭐{rating}</p>
    </div>
  );
};

export default ProductCard;
