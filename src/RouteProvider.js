import "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/StartScreen";
import CatalogScreen from "./screens/CatalogScreen";
import GoodItemExtended from "./screens/components/GoodItemExtended";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoadingScreen from "./screens/LoadingScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabRouter = () => {
  const mainReducer = useSelector((state) => state.mainReducer);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Catalog") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "basket" : "basket-outline";
          } else if (route.name == "Profile") {
            iconName = focused ? "people" : "people-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
        labelStyle: {
          fontFamily: "Montserrat",
        },
        style: {
          backgroundColor: "#282828",
          borderTopColor: "#282828",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ title: "Главная" }}
        component={StartScreen}
      />
      <Tab.Screen
        name="Catalog"
        options={{ title: "Каталог" }}
        component={CatalogScreen}
      />
      <Tab.Screen
        name="Cart"
        options={
          mainReducer.cart.length === 0
            ? {
                title: "Корзина",
              }
            : {
                title: "Корзина",
                tabBarBadge: mainReducer.cart.length,
                tabBarBadgeStyle: { fontSize: 12 },
              }
        }
        component={CartScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{ title: "Профиль" }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const RouteProvider = ({ navigation }) => {
  const mainReducer = useSelector((state) => state.mainReducer);
  const [logo, setLogo] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
    }, 3000);
  }, []);

  return (
    <>
      {logo ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator mode="modal">
            <Stack.Screen
              name="Main"
              component={tabRouter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="extended"
              component={GoodItemExtended}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default RouteProvider;
