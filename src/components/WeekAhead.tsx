import React, { useEffect, useCallback } from "react";
import useAxios from "axios-hooks";
import { useUserContext } from "./context/UserContext";
import WeatherByDay, { Weather } from "./WeatherByDay";
export default function WeekAhead() {
  const { location, updateUserLocation } = useUserContext();
  const [{ data, loading, error }, getWeather] = useAxios(
    {
      url: "forecast/daily",
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
          // API mentions ability to pass in unit for c / f instead of K but it doesn't seem to work
          // unit: "imperial",
          //API mentions count param but it doesnt seem to work
          cnt: "5",
          appid: "5c1af4026688449afa523c5f3ce4e335",
        },
      }).catch((err) => console.log(err)); //should show error somehow to user;
    }
  }, [location, getWeather]);

  function convertToWeatherType(): Weather[] | undefined {
    if (data.list) {
      return data.list.map((obj: any, index: number) => {
        if (index < 5) {
          let newData: Weather = {
            temp: obj.temp,
            icon: obj.weather[0].icon,
          };
          return newData;
        }
      });
    }
  }
  function formatAndPrintData() {
    //only show five days worth since API returns 10
    let formatData = convertToWeatherType();
    if (formatData) {
      formatData = formatData.slice(0, 5);
      console.log(formatData);
      return (formatData as Weather[]).map((obj: Weather) => {
        console.log("map", obj);
        return <WeatherByDay {...obj} />;
      });
    } else {
      return <div> Error formatting five day data</div>;
    }
  }

  if (loading) return <div>loading....</div>;
  if (error) return <div>ERROR</div>;
  else if (data)
    return (
      <>
        <div>
          <div>Five Day Forecast</div>
          {formatAndPrintData()}
        </div>
      </>
    );
  else return <div>ERROR</div>;
}
