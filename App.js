/* eslint-disable react/react-in-jsx-scope */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Feather, Ionicons } from "@expo/vector-icons";

import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;
const Maps = () => <Text>Maps</Text>;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Restaurants"
              screenOptions={{
                tabBarActiveTintColor: "#e91e63",
              }}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons
                      name="restaurant-outline"
                      size={size}
                      color={color}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons
                      name="settings-outline"
                      size={size}
                      color={color}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Maps"
                component={Maps}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="map" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
