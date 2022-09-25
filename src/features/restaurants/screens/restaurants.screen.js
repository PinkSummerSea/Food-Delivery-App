/* eslint-disable react/react-in-jsx-scope */
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { useState, useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(restaurants);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
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
            console.log(item);
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
