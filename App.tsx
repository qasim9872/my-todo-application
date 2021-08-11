import React from "react";
import { View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { useFonts } from "./src/infrastructure/core/fonts";
import tw from "./src/styles/tailwind";
import { Home } from "./src/pages/home/home.page";

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`flex-1`}>
      <Home />
      <ExpoStatusBar style="auto" />
    </View>
  );
}
