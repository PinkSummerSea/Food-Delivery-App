import styled from "styled-components"
import {View, Image, Text} from 'react-native'
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info"
export const MapCallout = ({restaurant}) => {
    return(
        <View>
           <CompactRestaurantInfo restaurant={restaurant}/>
        </View>
    )
}