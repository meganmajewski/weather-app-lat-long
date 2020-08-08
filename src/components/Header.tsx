import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/current-weather">
        Current Weather
      </Link>
      <Link className="header-link" to="/five-day-forecast">
        Five Day Forecast
      </Link>
    </header>
  );
}
