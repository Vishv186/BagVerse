import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  const dummyProducts = [
    {
      id: 101,
      name: "Travel Backpack",
      description: "Durable and spacious backpack",
      price: 1299,
      imageUrl: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
    },
    {
      id: 102,
      name: "Leather Handbag",
      description: "Premium leather stylish bag",
      price: 2499,
      imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e",
    },
    {
      id: 103,
      name: "Laptop Bag",
      description: "Protective laptop sleeve bag",
      price: 1599,
      imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },
    {
      id: 104,
      name: "Gym Bag",
      description: "Perfect for workouts",
      price: 999,
      imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    },
    {
      id: 105,
      name: "Tote Bag",
      description: "Casual everyday use bag",
      price: 799,
      imageUrl: "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
    },
    {
      id: 106,
      name: "Office Messenger Bag",
      description: "Formal and professional look",
      price: 1899,
      imageUrl: "https://images.unsplash.com/photo-1592878904946-b3cd7db4c6c6",
    },
    {
      id: 107,
      name: "Mini Sling Bag",
      description: "Compact and trendy sling bag",
      price: 699,
      imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
      id: 108,
      name: "Canvas Backpack",
      description: "Lightweight everyday backpack",
      price: 1199,
      imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },
    {
      id: 109,
      name: "Duffel Bag",
      description: "Spacious bag for travel and gym",
      price: 1799,
      imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba7",
    },
    {
      id: 110,
      name: "School Backpack",
      description: "Perfect for students",
      price: 899,
      imageUrl: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
    },
    {
      id: 111,
      name: "Luxury Handbag",
      description: "Elegant design for special occasions",
      price: 3299,
      imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e",
    },
    {
      id: 112,
      name: "Travel Duffel",
      description: "Large capacity travel bag",
      price: 2099,
      imageUrl: "https://images.unsplash.com/photo-1592878904946-b3cd7db4c6c6",
    },
    {
      id: 113,
      name: "Crossbody Bag",
      description: "Stylish and easy to carry",
      price: 999,
      imageUrl: "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
    },
    {
      id: 114,
      name: "Laptop Backpack Pro",
      description: "Waterproof laptop backpack",
      price: 1999,
      imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },
    {
      id: 115,
      name: "Weekender Bag",
      description: "Perfect for short trips",
      price: 2199,
      imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    },
    {
      id: 116,
      name: "Casual Sling Bag",
      description: "Daily use lightweight bag",
      price: 599,
      imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
      id: 117,
      name: "Adventure Backpack",
      description: "Perfect for trekking and outdoor trips",
      price: 2499,
      imageUrl: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
    },
    {
      id: 118,
      name: "Stylish Office Tote",
      description: "Elegant tote for office and meetings",
      price: 1399,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    },
  ];

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProducts(res.data);
        } else {
          setProducts(dummyProducts);
        }
      })
      .catch((err) => {
        console.log(err);
        setProducts(dummyProducts);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
