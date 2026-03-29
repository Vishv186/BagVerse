import { useEffect, useState } from "react";
import { getCartByUser, removeFromCart } from "../services/cartService";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const userId = 1; // temporary

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    getCartByUser(userId)
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = (id) => {
    removeFromCart(id)
      .then(() => {
        fetchCart();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>My Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <p>Product ID: {item.productId}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
