import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { mycurrentTheme } = useSelector((state) => state.myDarkMode);
  const mycolor = colors.iconColor;
  return (
    <View
      style={{
        height: 45,
        backgroundColor: "colors.headerColor",

        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 5,
        }}
      >
        <AntDesign
          style={{
            marginLeft: 15,
          }}
          name="youtube"
          size={32}
          color="red"
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 10,
            fontWeight: "bold",
            color: mycolor,
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <Ionicons name="md-videocam" size={32} color="#212121" />
        <Ionicons
          name="md-search"
          size={32}
          color="#212121"
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons
          name="account-circle"
          size={32}
          color="#212121"
          onPress={() =>
            dispatch({ type: "change_theme", payload: !mycurrentTheme })
          }
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
