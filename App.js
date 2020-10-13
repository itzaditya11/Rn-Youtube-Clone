import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subscribe from "./src/screens/Subscribe";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { useSelector } from "react-redux";
import { reducer } from "./src/redux/reducer";
import { themeReducer } from "./src/redux/themeReducer";
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "white",
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red",
  },
};
const RootReducer = combineReducers({
  cardData: reducer,
  myDarkMode: themeReducer,
});

const store = createStore(RootReducer);

const RootHome = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "explore";
          } else if (route.name === "subscribe") {
            iconName = "subscriptions";
          }

          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export const Navigation = () => {
  let mycurrentTheme = useSelector((state) => {
    return state.myDarkMode;
  });
  return (
    <NavigationContainer
      theme={mycurrentTheme ? customDarkTheme : customDefaultTheme}
    >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
});
