import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

/*NOTE: route and navigation = we get that by default because we are using the details
as a component inside of our stack screen 
*/
function Details({ route, navigation }) {
  const { data } = route.params;

  return (
    <SafeAreaView>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  );
}

export default Details;
