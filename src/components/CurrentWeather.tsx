import React from "react";
import { useUserContext } from "./context/UserContext";
export interface UserLocation {
  latitude: Number;
  longitude: Number;
}
export default function CurrentWeather() {
  const { location, updateUserLocation } = useUserContext();
  function getUserLocation() {
    if (location.longitude === undefined) {
      console.log("test in get user location");
      updateUserLocation();
    }
  }
  return (
    <div>
      <div>Today's weather is:</div>
      {getUserLocation()}
      {location.latitude}
    </div>
  );
}
