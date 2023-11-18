"use client";
import { useState } from "react";
import Camera from "../components/camera";

export default function Map() {
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [showMap, setShowMap] = useState<boolean>(false);

  return (
    <>
      {!showCamera ? (
        <button
          onClick={() => setShowCamera(!showCamera)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          Pin <br /> Bin
        </button>
      ) : (
        <Camera />
      )}
    </>
  );
}
