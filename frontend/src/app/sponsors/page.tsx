"use client"; // Carousel.tsx
import React, { useState, useEffect } from "react";
import "./App.css";

const Carousel: React.FC = () => {
  const totalItems = 6; // Adjust the total number of items
  const [currentIndex, setCurrentIndex] = useState(totalItems - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {[...Array(totalItems)].map((_, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              transform: `translateX(-${index * (100 / totalItems)}%)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            <div style={{ background: "white" }}>{/* Content for item */}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
