import CurrentWeather, { UserLocation } from "../components/CurrentWeather";
import React from "react";
import { render } from "@testing-library/react";
import { UserContext } from "../components/context/UserContext";
const location: UserLocation = {
  lat: "4.40",
  lon: "5.00",
} as UserLocation;
const mockGetWeather = jest.fn().mockImplementation(() => Promise.resolve(""));
jest.mock("axios-hooks", () => () => [
  {
    data: {
      weather: [{ icon: "some" }],
      main: { temp: "52.4" },
    },
  },
  mockGetWeather,
]);

test("location data is read from context", () => {
  const { getByText } = render(
    <UserContext.Provider value={{ location, updateUserLocation: () => {} }}>
      <CurrentWeather />
    </UserContext.Provider>
  );
  expect(mockGetWeather).toHaveBeenCalledWith({
    params: {
      appid: "5c1af4026688449afa523c5f3ce4e335",
      lat: location.lat,
      lon: location.lon,
    },
  });
});

test("current weather is displayed on the page", () => {
  const { getByText } = render(
    <UserContext.Provider value={{ location, updateUserLocation: () => {} }}>
      <CurrentWeather />
    </UserContext.Provider>
  );
  const lat = getByText(/52.4/i);
  expect(lat).toBeInTheDocument();
});
