import { PRODUCTS } from "../products";
import { ProductCard } from "../components/ProductCard";
import "./shop.css"; 

export const HomePage = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>TechStore 💻</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};