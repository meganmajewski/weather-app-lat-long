import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentWeather from "./components/CurrentWeather";
import WeekAhead from "./components/WeekAhead";
import { UserProvider } from "./components/context/UserContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div id="main">
          <UserProvider>
            <Switch>
              <Route path="/current-weather" component={CurrentWeather} />
              <Route path="/five-day-forecast">
                <WeekAhead />
              </Route>
              <Route path="/">
                Weather App Code Sample
                <p>Megan Majewski</p>
              </Route>
            </Switch>
          </UserProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
