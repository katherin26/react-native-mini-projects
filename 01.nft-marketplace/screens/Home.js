import React from "react";
import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
//NOTE: FlatList = That lowers the memory usage therefore it technically.
//Uses lazy loading for better optimization.

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => {
              <Text>{item.name}</Text>;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
