import React from "react";

export interface Weather {
  temp: {
    day?: string;
    eve?: string;
    max?: string;
    min?: string;
    current?: string;
    morn?: string;
    night?: string;
  };
  icon?: string;
}
export default function WeatherByDay(props: Weather) {
  function printCurrentWeather() {
    return <div>Currently: {props.temp.current} K</div>;
  }
  function printEve() {
    return <div>This Evening: {props.temp.day} K </div>;
  }
  function printDay() {
    return <div>During the day: {props.temp.day} K </div>;
  }
  function printHigh() {
    return <div>High: {props.temp.max} K </div>;
  }
  function printLow() {
    return <div>Low: {props.temp.min} K</div>;
  }
  function printIcon() {
    return (
      <img
        alt="weather icon"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      />
    );
  }
  return (
    <div>
      <div>{props.temp.current && printCurrentWeather()}</div>
      <div>{props.temp.day && printDay()}</div>
      <div>{props.temp.eve && printEve()}</div>
      <div>{props.temp.max && printHigh()}</div>
      <div>{props.temp.min && printLow()}</div>
      <div>{props.icon && printIcon()}</div>
    </div>
  );
}
