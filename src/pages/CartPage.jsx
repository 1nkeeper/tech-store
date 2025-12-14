import { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/ShopContext";
import { CartItem } from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css"; 

export const CartPage = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Sepetinizdeki Ürünler</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Alt Toplam: ₺{totalAmount} </p>
          <button onClick={() => navigate("/")}> Alışverişe Dön </button>
          <button> Ödemeyi Tamamla </button>
        </div>
      ) : (
        <h1> Sepetiniz Boş :( </h1>
      )}
    </div>
  );
};