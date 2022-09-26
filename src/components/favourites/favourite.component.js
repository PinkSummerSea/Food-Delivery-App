/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() => {
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={30}
        color={isFavourite ? "hotpink" : "white"}
      />
    </FavouriteButton>
  );
};
