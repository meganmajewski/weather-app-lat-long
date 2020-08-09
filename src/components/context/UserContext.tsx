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
  function formatLatLong(location: any): UserLocation {
    const twoDecimilLocationLon =
      location.coords.longitude.toString().indexOf(".") + 3;
    const twoDecimilLocationLat =
      location.coords.latitude.toString().indexOf(".") + 3;
    let lon = location.coords.longitude
      .toString()
      .substring(0, twoDecimilLocationLon);
    let lat = location.coords.latitude
      .toString()
      .substring(0, twoDecimilLocationLat);
    let userLocation: UserLocation = { lon, lat };
    return userLocation;
  }

  async function updateUserLocation() {
    let location: any = await getGeoLocation().catch((error) =>
      console.log("ERROR GETTING GEOLOCATION,", error)
    );
    let formattedLocation = formatLatLong(location);
    setLocation({ ...formattedLocation });
  }
  return (
    <UserContext.Provider value={{ location, updateUserLocation }}>
      {children}
    </UserContext.Provider>
  );
}
const useUserContext = () => React.useContext(UserContext);

export { UserProvider, useUserContext };
