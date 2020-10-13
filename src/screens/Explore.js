import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import Header from "../components/Header";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
import Constant from "expo-constants";
import { useSelector } from "react-redux";

const LittleCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 50,
        width: 180,
        borderRadius: 4,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          marginTop: 5,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <LittleCard name="Trending" />
          <LittleCard name="Gaming" />
          <LittleCard name="Music" />
          <LittleCard name="Movies" />
          <LittleCard name="Educational" />
          <LittleCard name="News" />
        </View>
        <Text
          style={{
            margin: 8,
            marginTop: 12,
            textAlign: "center",
            fontSize: 22,
            borderBottomWidth: 1,
          }}
        >
          Trending Videos
        </Text>
        <FlatList
          data={cardData}
          renderItem={({ item }) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </ScrollView>
    </View>
  );
};

export default Explore;
