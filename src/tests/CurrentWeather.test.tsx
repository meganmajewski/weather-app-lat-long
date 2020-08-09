import CurrentWeather, { UserLocation } from "../components/CurrentWeather";
import React from "react";
import { render } from "@testing-library/react";
import { UserProvider, UserContext } from "../components/context/UserContext";
const location: UserLocation = {
  lat: 4.4,
  lon: 5.0,
} as UserLocation;
const mockVote = jest.fn().mockImplementationOnce(() => Promise.resolve(""));
jest.mock("axios-hooks", () => () => [
  { data: { results: [{ url: "some.jpg" }] } },
  mockVote,
]);

test("location data is read from context", () => {
  const { getByText } = render(
    <UserContext.Provider value={{ location, updateUserLocation: () => {} }}>
      <CurrentWeather />
    </UserContext.Provider>
  );
  const lat = getByText(/4.4/i);
  expect(lat).toBeInTheDocument();
});

test("current weather is displayed on the page", () => {
  const { getByText } = render(
    <UserContext.Provider value={{ location, updateUserLocation: () => {} }}>
      <CurrentWeather />
    </UserContext.Provider>
  );
  const lat = getByText(/it is currently 88 and sunny/i);
  expect(lat).toBeInTheDocument();
});
