import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    title: "Premium Backpacks"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    title: "Elegant Handbags"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    title: "Travel Bags"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    title: "Leather Collection"
  }
];

function CollectionSlider() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "400px",
      overflow: "hidden",
      position: "relative"
    }}>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "transform 0.8s ease",
            transform: `translateX(${(index - current) * 100}%)`
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          <h2 style={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            color: "white",
            fontSize: "40px",
            background: "rgba(0,0,0,0.4)",
            padding: "10px 20px",
            borderRadius: "8px"
          }}>
            {slide.title}
          </h2>
        </div>
      ))}

    </div>
  );
}

export default CollectionSlider;