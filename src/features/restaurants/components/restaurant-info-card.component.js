import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "./spacer/spacer.component";

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RowEnd = styled.View`
  flex-direction: row;
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_HTOOVCR2w3iFgb2ZEoFKAs4oWsqItNnsg&usqp=CAU",
    photos = [
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/30/0/FNK_Ice-Cream-in-a-Bag_s4x3.jpg.rend.hgtvcom.406.305.suffix/1525105614384.jpeg",
    ],
    address = "100 Ave",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {ratingArray.map((item, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <RowEnd>
            {isClosedTemporarily && (
              <Text
                variant="label"
                style={{ color: "lightcoral", fontWeight: "bold" }}
              >
                CLOSED
              </Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Image source={{ uri: icon }} style={{ width: 20, height: 20 }} />
          </RowEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
