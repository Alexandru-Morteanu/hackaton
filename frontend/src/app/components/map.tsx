"use client";
import {
  GoogleMap,
  LoadScript,
  Circle,
  InfoBox,
  Marker,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const MapContainer = () => {
  let [userlat, setUserLat] = useState(0);
  let [userlong, setUserLong] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLong(position.coords.longitude);
      setUserLat(position.coords.latitude);
    });
  }, []);
  const center = { lat: userlat, lng: userlong };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDn8a5KSUALiARMAOQWEPq13XK1jpat5-E">
      <GoogleMap
        id="map"
        mapContainerStyle={{
          marginTop: "50px",
          height: "90vh",
          width: "100%",
        }}
        zoom={5}
        center={center}
      >
        {/* <Marker position={center} onClick={() => setIsOpen(!isOpen)}>
          {isOpen && (
            <InfoBox onCloseClick={() => setIsOpen(false)}>
              <div
                style={{
                  backgroundColor: `black`,
                  opacity: 0.75,
                  padding: `12px`,
                  color: "white",
                }}
              >
                <div style={{ fontSize: `16px` }}>
                  This zone seems to be dangerous!
                </div>
              </div>
            </InfoBox>
          )}
        </Marker>
        <Circle
          center={center}
          radius={1000}
          options={{
            radius: 100,
            strokeColor: "#FF0000",
            strokeOpacity: 1,
            strokeWeight: 20,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
          }}
        /> */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
