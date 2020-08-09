import React, { useEffect } from "react";
import useAxios from "axios-hooks";
import { useUserContext } from "./context/UserContext";
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
      }).catch((err) => console.log(err)); //show error somehow to user
    }
  }, [location, getWeather]);

  function getUserLocation() {
    if (location.lon === undefined) {
      updateUserLocation();
    }
  }
  if (loading) return <div>loading....</div>;
  if (error) return <div>ERROR</div>;
  else if (data)
    return (
      <>
        <div>
          <div>Today's weather is:</div>
          <img
            src={` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
          {data.weather[0].description}
          <br />
          Currently: {data.main.temp} K
        </div>
      </>
    );
  else return <div>ERROR</div>;
}
