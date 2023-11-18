"use client"; // Carousel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Inorog from "./inorog.jpeg";
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
      <div
        className="carousel"
        style={{
          transform: `translateX(-${currentIndex * (100 / totalItems)}%)`,
          transition: "transform 1s ease-in-out ",
          animationDelay: "10s",
        }}
      >
        {/* Add more items to the end */}
        <div className="carousel-item">
          <div style={{ color: "white", flexDirection: "column" }}>
            {/* <Image src={Inorog} alt="" /> */}
            <div className="text-white items-center font-bold text-3xl p-4">
              Inorog
            </div>
            <div className="mb-4 text-gray-300">
              Într-o lume în care miraculosul a rămas prins doar în cărțile de
              poveşti, echipa noastră îşi propune să demonstreze că, doar atunci
              când crezi în propria magie, poți înfăptui lucruri mărețe. Inorog
              este o echipă de robotică, ai cărei membri – mentori, profesori şi
              elevi ai Colegiului Național „Gh. R. Codreanu” din Bârlad – au în
              comun ambiția nemăsurată, pornind în aventura cunoaşterii acestui
              vast domeniu. Cu toții am răspuns afirmativ provocării lansate de
              BRD First Tech Challenge Romania, organizat de Asociația Nație
              Prin Educație, aceea de a forma o echipa unită, funcțională,
              fondată pe încredere, corectitudine şi cooperare, cu scopul final
              – de a construi roboți.
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ background: "white" }}></div>
        </div>
        <div className="carousel-item">
          <div style={{ background: "white" }}></div>
        </div>
        <div className="carousel-item">
          <div style={{ background: "white" }}></div>
        </div>
        <div className="carousel-item">
          <div style={{ background: "white" }}></div>
        </div>
        <div className="carousel-item">
          <div style={{ background: "white" }}></div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Carousel;
