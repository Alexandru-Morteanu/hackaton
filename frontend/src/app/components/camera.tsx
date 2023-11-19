"use client";

import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import axiosInstance from "../components/axios";
import { STATES } from "../../../constants";
interface CameraProps {
  switchState: (state: string) => void;
}
export default function Camera({ switchState }: CameraProps) {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImage(imageSrc || null);

    if (imageSrc) {
      const base64Data = imageSrc.replace(/^data:image\/jpeg;base64,/, "");
      const binaryData = atob(base64Data);
      const uint8Array = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
      }
      console.log(uint8Array);
      captur(uint8Array);
    }
  }, [webcamRef]);
  async function captur(uint8Array: Uint8Array) {
    console.log(Array.from(uint8Array) as number[]);
    const res = await axiosInstance.post("/", {
      buffer: Array.from(uint8Array) as number[],
    });
    console.log(res.data);
    // const res = {
    //   data: "True",
    // };
    if (res.data === "True") {
      switchState(STATES.MAP);
    }
    console.log(res);
  }

  return (
    <div className=" flex sm:flex-row flex-col items-center justify-center bg-black rounded-lg">
      <div className="flex flex-col sm:border-r-[4px] sm:border-r-black">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-tl-lg rounded-tr-lg"
        />
        <button
          onClick={capture}
          className="m-2 bg-red-600 focus:bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Capture Photo
        </button>
      </div>
      {image && (
        <>
          <p>{"=>"}</p>
          <div className="sm:border-l-[4px] sm:border-l-black  flex flex-col">
            <img
              src={image}
              alt="Captured"
              className="rounded-tl-lg rounded-tr-lg"
            />
            <button className="m-2 bg-red-600 focus:bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Preview Photo
            </button>
          </div>
        </>
      )}
    </div>
  );
}
