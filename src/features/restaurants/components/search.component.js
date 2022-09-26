import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useState, useContext, useEffect } from "react";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({onFavouriteToggle, isFavouriteToggled}) => {
  const locationContext = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(locationContext.keyword);

  useEffect(() => {
    setSearchKeyword(locationContext.keyword);
  }, [locationContext.keyword]);
  
//   useEffect(() => {
//     locationContext.search(searchKeyword);
//   }, []);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        placeholder="Search for a location"
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        value={searchKeyword}
        onSubmitEditing={() => {
          locationContext.search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
