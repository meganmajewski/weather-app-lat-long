import React, { ReactNode } from "react";
import { UserLocation } from "../CurrentWeather";

export type Props = {
  children?: ReactNode;
};
export const UserContext = React.createContext({
  location: {} as UserLocation,
  updateUserLocation: () => {},
});

function UserProvider(props: Props) {
  const { children } = props;
  const [location, setLocation] = React.useState<UserLocation>(
    {} as UserLocation
  );

  function getGeoLocation() {
    return new Promise((response, error) => {
      navigator.geolocation.getCurrentPosition(response, error);
    });
  }

  async function updateUserLocation() {
    let location: any = await getGeoLocation().catch((error) =>
      console.log("ERROR GETTING GEOLOCATION,", error)
    );
    setLocation({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
  }
  return (
    <UserContext.Provider value={{ location, updateUserLocation }}>
      {children}
    </UserContext.Provider>
  );
}
const useUserContext = () => React.useContext(UserContext);

export { UserProvider, useUserContext };
