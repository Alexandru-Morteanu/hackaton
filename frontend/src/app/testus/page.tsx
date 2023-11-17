"use client";
import React from "react";
import Image from "next/image";
type Props = {};

export default function ({}: Props) {
  const handleButtonClick = () => {
    console.log("1");
    const scrollToY = 500;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        height: "500vh",
      }}
    >
      <div>
        <div
          style={{
            position: "fixed",
            display: "flex",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            flexDirection: "column",
            zIndex: -5,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: " #75FF89",
            fontWeight: "bold 200px",
            alignItems: "center",
            borderRadius: "20px",
            padding: "4px",
            fontSize: "150px",
            zIndex: 10,
          }}
        >
          BinMap
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: " #75FF89",
            fontWeight: "bold 200px",
            alignItems: "center",
            borderRadius: "20px",
            padding: "4px",
            fontSize: "40px",
            zIndex: 10,
          }}
        >
          Project made and for everyone
        </div>
        <div
          onClick={handleButtonClick}
          style={{
            display: "flex",
            justifyContent: "center",
            color: " #75FF89",
            fontWeight: "bold 200px",
            alignItems: "center",
            borderRadius: "20px",
            padding: "4px",
            fontSize: "40px",
            zIndex: 10,
            cursor: "pointer",
          }}
        >
          Learn more
        </div>
      </div>
      <div></div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: " #75FF89",
            fontWeight: "bold 150px",
            alignItems: "start",
            borderRadius: "20px",
            padding: "4px",
            fontSize: "150px",
            zIndex: 10,
          }}
        >
          About Us
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
