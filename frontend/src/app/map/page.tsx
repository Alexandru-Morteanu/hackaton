"use client";
import { useState } from "react";
import Camera from "../components/camera";
import MapContainer from "../components/map";
import { STATES } from "../../../constants";

export default function Map() {
  const [currentState, setCurrentState] = useState<string>(STATES.BUTTON);

  const switchState = (state: string) => {
    setCurrentState(state);
  };

  return (
    <>
      {(() => {
        switch (currentState) {
          case STATES.BUTTON:
            return (
              <button
                onClick={() => {
                  switchState(STATES.CAMERA);
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                Pin <br /> Bin
              </button>
            );
          case STATES.CAMERA:
            return <Camera switchState={switchState} />;
          case STATES.MAP:
            return <MapContainer />;
          default:
            return null;
        }
      })()}
    </>
  );
}
