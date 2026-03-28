import { addToCart } from "../services/CartService";

function ProductCard({ product }) {
  const handleAddToCart = () => {
    const cartData = {
      userId: 1,
      productId: product.id,
      quantity: 1,
    };

    addToCart(cartData)
      .then(() => {
        alert("Added to cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        width: "200px",
        color: "black",
      }}
    >
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
