/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { Image, Text } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { MapCallout } from "../components/map-callout.component";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              pinColor="hotpink"
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Image
                source={require("./biryani.png")}
                style={{ height: 35, width: 35 }}
              />
              <MapView.Callout
                onPress={() => {
                  navigation.navigate("Restaurant Detail", { restaurant });
                }}
              >
                <MapCallout restaurant={restaurant} isMap={true} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
