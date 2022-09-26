/* eslint-disable react/react-in-jsx-scope */
import { StatusBar, SafeAreaView, FlatList, Pressable } from "react-native";
import { useState, useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";

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

export const RestaurantsScreen = ({navigation}) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  //console.log(restaurants);
  //console.log(navigation)
  return (
    <SafeArea>
      <Search />
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
              <Pressable onPress={() =>  navigation.navigate("Restaurant Detail", {
                restaurant: item,
              })}>
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
