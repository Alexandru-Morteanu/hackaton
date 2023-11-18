"use client";
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import axiosInstance from "../components/axios";

export default function Camera() {
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
  }

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture Photo</button>
      {image && <img src={image} alt="Captured" />}
    </div>
  );
}
