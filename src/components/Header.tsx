import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link className="header-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="header-link" to="/current-weather">
            Current Weather
          </Link>
        </li>
        <li>
          <Link className="header-link" to="/five-day-forecast">
            Five Day Forecast
          </Link>
        </li>
      </ul>
    </header>
  );
}
