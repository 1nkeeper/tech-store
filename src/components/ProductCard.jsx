import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const ProductCard = (props) => {
  const { id, productName, price, productImage } = props.data;
  
  const { addToCart, cartItems } = useContext(ShopContext);

  // Bu üründen sepette kaç tane var?
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₺{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Sepete Ekle {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};