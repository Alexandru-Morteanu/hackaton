"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface NavigationButtonProps {
  // your component props here
}

const NavigationButton: React.FC<NavigationButtonProps> = () => {
  const [isSquareOpen, setIsSquareOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  };

  return (
    <div
      style={{
        background: "black",
        display: "flex",
        opacity: "70%",
        justifyContent: "center",
        position: "fixed",
        alignItems: "center",
        width: "100%",
        height: "15vh",
        flexDirection: "row",
        zIndex: 10,
        top: "0",
        gap: 100,
      }}
    >
      {/* Button visible only on small screens */}
      {isSmallScreen && (
        <button
          onClick={handleButtonClick}
          style={{
            color: "white",
          }}
        >
          Open Navigation
        </button>
      )}

      {/* Conditional rendering based on the state */}
      {isSquareOpen && isSmallScreen && (
        <div style={squareStyle}>
          {/* Navigation buttons */}
          <div>
            {" "}
            <Link href="/">home</Link>
          </div>
          <div>
            {" "}
            <Link href="/Fade">fade</Link>
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
            alignItems: "start",
            borderRadius: "20px",
            width: "80%",
            padding: "25px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "white",
              justifyContent: "start",
              alignItems: "start",
              borderRadius: "20px",
              padding: "4px",
              cursor: "pointer",
            }}
          >
            {" "}
            <Link href="/">home</Link>
          </div>

          <div
            style={{
              display: "flex",
              color: "white",
              justifyContent: "start",
              alignItems: "start",
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
              color: "white",
              justifyContent: "start",
              alignItems: "start",
              borderRadius: "20px",
              padding: "4px",
              cursor: "pointer",
            }}
          >
            {" "}
            <Link href="/pagina">pagina</Link>
          </div>
        </div>
      )}
    </div>
  );
};

const squareStyle: React.CSSProperties = {
  position: "absolute",
  top: "40px", // Adjust the position as needed
  left: "0", // Adjust the position as needed
  width: "150px",
  padding: "20px",
  display: "flex",
  zIndex: 11,
  flexDirection: "column",
  background: "white",
  border: "1px solid white",
  borderRadius: "10px",
};

export default NavigationButton;
