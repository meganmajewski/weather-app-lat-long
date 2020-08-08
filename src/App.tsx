import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentWeather from "./components/CurrentWeather";
import WeekAhead from "./components/WeekAhead";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div id="main">
          <Switch>
            <Route path="/current-weather">
              <CurrentWeather />
            </Route>
            <Route path="/five-day-forecast">
              <WeekAhead />
            </Route>
            <Route path="/">
              Weather App Code Sample
              <p>Megan Majewski</p>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
