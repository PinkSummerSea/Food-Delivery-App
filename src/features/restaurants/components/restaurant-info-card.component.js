/* eslint-disable react/react-in-jsx-scope */
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Info,
  Address,
  Row,
  Rating,
  RowEnd,
  RestaurantCard,
  RestaurantCardCover,
  Icon,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

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
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((item, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <RowEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED</Text>}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Icon source={{ uri: icon }} />
          </RowEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
