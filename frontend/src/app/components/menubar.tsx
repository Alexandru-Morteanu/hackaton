"use client";
import Link from "next/link";
import { useState } from "react";

const MenuBar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <div
      className="fixed flex text-white w-full bg-black bg-opacity-40 z-50 backdrop-blur-lg"
      style={{ fontFamily: "DM Serif Display, serif" }}
    >
      <div className="flex justify-between w-full">
        <Link href="/">
          <h1 className="text-white items-center font-bold text-3xl p-4 opacity-100">
            🌍 PinBin<span className="text-green-800">.</span>
          </h1>
        </Link>
        <button
          onClick={() => {
            setOpenNav(!openNav);
          }}
          className="sm:hidden flex items-center p-5 z-[999]"
        >
          <div
            style={{
              height: "20px",
              width: "30px",
              background: "transparent",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              cursor: "pointer",
              opacity: "0.8",
              transition: "0.5s",
            }}
          >
            <div
              style={{
                position: "relative",
                backgroundColor: "white",
                height: "30%",
                width: "100%",
                borderRadius: "10cm",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                backgroundColor: "white",
                height: "30%",
                width: "100%",
                borderRadius: "10cm",
              }}
            ></div>
          </div>
        </button>
        <div
          className="sm:hidden flex flex-col w-3/8 h-screen bg-black bg-opacity-40 mt-50px"
          style={{
            marginTop: "67px",
            position: "absolute",
            right: openNav ? "0px" : "-1000px",
          }}
        >
          {[
            { text: "About", link: "/about" },
            { text: "Locations", link: "/map" },
          ].map((button, index) => {
            return (
              <Link
                key={index}
                className="px-3 x-2 hover:transition-colors hover:text-orange-5100 sm:border-white hover:text-green-600 font-serif text-2xl"
                href={button.link}
              >
                <p className="font-semibold p-3 sm:p-0">{button.text}</p>
              </Link>
            );
          })}
        </div>
        <div className="sm:flex hidden items-center">
          {[
            { text: "About", link: "/about" },
            { text: "Locations", link: "/map" },
          ].map((button, index) => {
            return (
              <Link
                key={index}
                className="px-3 x-2 hover:transition-colors hover:text-orange-5100 sm:border-white hover:text-green-600 font-serif text-2xl"
                href={button.link}
              >
                <p className="font-semibold p-3 sm:p-0">{button.text}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MenuBar;
