"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import GreenBar from "./icons/Green.jpeg";
import Image from "next/image";
interface NavigationButtonProps {
  // your component props here
}

const NavigationButton: React.FC<NavigationButtonProps> = () => {
  const [isSquareOpen, setIsSquareOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    // Check screen size on mount and resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    // Toggle the state to open/close the square
    setIsSquareOpen((prev) => !prev);
    setIsRotated((prev) => !prev);
  };

  return (
    <div
      style={{
        background: "black",
        display: "flex",

        position: "fixed",

        alignItems: "center",
        width: "100%",
        height: "15vh",
        flexDirection: "row",
        zIndex: 10,
        top: "0",
        gap: 100,
        padding: "10px",
      }}
    >
      <div>
        <div></div>
      </div>
      {/* Button visible only on small screens */}
      {isSmallScreen && (
        <div
          onClick={handleButtonClick}
          style={{
            display: "flex",
            alignContent: "flex-start",
            justifyContent: "space-between",
            color: "#75FF89",
            position: "fixed",
            top: 50,
            left: 50,
            fontWeight: "bold",
            height: "20px",
            width: "30px",
            background: "transparent",
            alignItems: "start",
            flexDirection: "column",
            cursor: "pointer",
            opacity: "0.8",
            transform: `rotate(${isRotated ? 90 : 0}deg)`, // Use the rotation state
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div
            style={{
              background: "#75FF89",
              height: "30%",
              width: "100%",
              borderRadius: "10cm",
            }}
          ></div>
          <div
            style={{
              background: "#75FF89",
              height: "30%",
              width: "100%",
              borderRadius: "10cm",
            }}
          ></div>
        </div>
      )}

      {/* Conditional rendering based on the state */}
      {isSquareOpen && isSmallScreen && (
        <div style={squareStyle}>
          {/* Navigation buttons */}
          <div>
            {" "}
            <Link href="/">Home</Link>
          </div>
          <div>
            {" "}
            <Link href="/map">The Map</Link>
          </div>
          <div>
            {" "}
            <Link href="/responsive">responsive</Link>
          </div>
        </div>
      )}

      {/* Bar with links visible on larger screens */}
      {!isSmallScreen && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#75FF89",

            borderRadius: "20px",
            width: "80%",
            padding: "25px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "5px solid #75FF89",
              justifyContent: "center",

              fontWeight: "bold",
              alignItems: "center",
              borderRadius: "20px",
              padding: "4px",
              cursor: "pointer",
            }}
          >
            {" "}
            <Link href="/">TrashAway</Link>
          </div>

          <div
            style={{
              display: "flex",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              padding: "4px",
              cursor: "pointer",
            }}
          >
            {" "}
            <Link href="/test">test</Link>
          </div>
          <div
            style={{
              display: "flex",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              padding: "4px",
              cursor: "pointer",
            }}
          >
            {" "}
            <Link href="/map">map</Link>
          </div>
        </div>
      )}
    </div>
  );
};

const squareStyle: React.CSSProperties = {
  position: "absolute",
  top: "110px", // Adjust the position as needed
  left: "0", // Adjust the position as needed
  width: "200px",
  height: "60",
  padding: "20px",
  color: "#75FF89",
  fontWeight: "bold",
  display: "flex",
  zIndex: 11,
  flexDirection: "column",
  background: "black",
  border: "1px solid black",
  borderRadius: "10px",
};

export default NavigationButton;
