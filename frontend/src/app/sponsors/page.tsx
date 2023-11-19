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
            <div className="text-white items-center font-bold text-1xl p-4">
              Inorog
            </div>
            <div className="mb-4 text-gray-10">
              Într-o lume în care miraculosul a rămas prins doar în cărțile de
              poveşti, echipa noastră îşi propune să demonstreze că, doar atunci
              când crezi în propria magie, poți înfăptui lucruri mărețe.
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ color: "white", flexDirection: "column" }}>
            {/* <Image src={Inorog} alt="" /> */}
            <div className="text-white items-center font-bold text-1xl p-4">
              FluxInternet
            </div>
            <div className="mb-4 text-gray-10">
              Locul 1 in Top Afaceri Romania, localitatea BARLAD, domeniul 62:
              Activitati de servicii in tehnologia informatiei
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ color: "white", flexDirection: "column" }}>
            {/* <Image src={Inorog} alt="" /> */}
            <div className="text-white items-center font-bold text-1xl p-4">
              MedFarm
            </div>
            <div className="mb-4 text-gray-10">
              Locul 1 in Top Afaceri Romania Microintreprinderi, judetul VASLUI,
              domeniul 4773: Comert cu amanuntul al produselor farmaceutice, in
              magazine specializate
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ color: "white", flexDirection: "column" }}>
            {/* <Image src={Inorog} alt="" /> */}
            <div className="text-white items-center font-bold text-1xl p-4">
              InfoTrust
            </div>
            <div className="mb-4 text-gray-10">
              We specialize in online measurement architecture for multi-brand
              companies, breaking down silos and validating data to ensure
              organizations can make confident marketing decisions.
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ color: "white", flexDirection: "column" }}>
            {/* <Image src={Inorog} alt="" /> */}
            <div className="text-white items-center font-bold text-1xl p-4">
              SorTech
            </div>
            <div className="mb-4 text-gray-10">
              Sortech Auto Parts LLC is a leading provider of spare parts for
              luxury brand vehicles with operations in North America and China.
              With more than 20 years of industry experiences, Founder & CEO of
              Sortech is proud to introduce to you the SORTECH brand.
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ color: "white", flexDirection: "column" }}>
            {/* <Image src={Inorog} alt="" /> */}
            <div className="text-white items-center font-bold text-1xl p-4">
              Nomis 2003
            </div>
            <div className="mb-4 text-gray-10">
              Inalta calificare, experienta angajatilor precum si echipamentele
              performante specifice lucrarilor de constructii – montaj au permis
              abordarea unei game largi de lucrari realizate in conditii de
              calitate deosebite.
            </div>
          </div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Carousel;
