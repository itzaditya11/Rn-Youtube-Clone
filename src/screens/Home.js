import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, FlatList } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Constant from "expo-constants";
import { useSelector } from "react-redux";
const Home = () => {
  const cardData = useSelector((state) => state.cardData);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header />
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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
