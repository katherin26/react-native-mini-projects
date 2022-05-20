import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
  //NOTE: This props is going to contain the background color of our status bar.
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
