/* eslint-disable react/react-in-jsx-scope */
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import { useState, useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavouriteToggled, setIsFavouriteToggled] = useState(false);
  //console.log(favourites)
  //console.log(restaurants);
  //console.log(navigation)
  return (
    <SafeArea>
      <Search
        onFavouriteToggle={() => setIsFavouriteToggled(!isFavouriteToggled)}
        isFavouriteToggled={isFavouriteToggled}
      />
      {isFavouriteToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <>
          <Spacer position="top" size="large" />
          <Spacer position="top" size="large" />
          <Spacer position="top" size="large" />
          <ActivityIndicator animating={true} color="#ff69b4" size="large" />
        </>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("Restaurant Detail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
