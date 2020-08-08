import CurrentWeather, { UserLocation } from "../components/CurrentWeather";
import React from "react";
import { render } from "@testing-library/react";
import { UserProvider, UserContext } from "../components/context/UserContext";
const location: UserLocation = {
  latitude: 4.4,
  longitude: 5.0,
} as UserLocation;
test("renders current weather page", () => {
  const { getByText } = render(
    <UserContext.Provider value={{ location, updateUserLocation: () => {} }}>
      <CurrentWeather />
    </UserContext.Provider>
  );
  const me = getByText(/today's weather/i);
  const lat = getByText(/4.4/i);
  expect(lat).toBeInTheDocument();
});

test("gets user location", () => {
  const { getByText } = render(<CurrentWeather />);
  const me = getByText(/today's weather/i);
  expect(me).toBeInTheDocument();
});

//@TODO Mock Context
