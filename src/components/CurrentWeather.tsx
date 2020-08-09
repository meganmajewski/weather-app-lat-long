import React, { useEffect, useCallback } from "react";
import useAxios from "axios-hooks";
import { useUserContext } from "./context/UserContext";
import WeatherByDay, { Weather } from "./WeatherByDay";
export interface UserLocation {
  lat: string;
  lon: string;
}
export default function CurrentWeather() {
  const { location, updateUserLocation } = useUserContext();
  const [{ data, loading, error }, getWeather] = useAxios(
    {
      url: "weather",
      method: "get",
    },
    { manual: true }
  );
  const getUserLocation = useCallback(() => {
    if (location.lon === undefined) {
      updateUserLocation();
    }
  }, [location.lon, updateUserLocation]);
  //two use effects because this one runs only once
  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);
  //use effect to get weather runs each time a location changes
  useEffect(() => {
    if (location.lat && location.lon) {
      getWeather({
        params: {
          lat: location.lat,
          lon: location.lon,
          appid: "5c1af4026688449afa523c5f3ce4e335",
        },
      }).catch((err) => console.log(err)); //show error somehow to user;
    }
  }, [location, getWeather]);

  function formatAndPrintData() {
    if (data.main.temp && data.weather[0].icon) {
      let formatData: Weather = {
        temp: { current: data.main.temp },
        icon: data.weather[0].icon,
      };
      return <WeatherByDay {...formatData} />;
    } else {
      return <div>Something went wrong getting your current weather data</div>;
    }
  }
  if (loading) return <div>loading....</div>;
  if (error) return <div>ERROR</div>;
  else if (data) return <>{formatAndPrintData()}</>;
  else return <div>Current Weather: ERROR</div>;
}
