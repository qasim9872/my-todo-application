import React from "react";
import { Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { useFonts } from "./src/infrastructure/core/fonts";
import tw from "./src/styles/tailwind";

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`flex-1 bg-red-100 items-center justify-center`}>
      <Text style={tw`text-black font-poppins font-bold`}>
        Open up App.tsx to start working on your app!
      </Text>
      <ExpoStatusBar style="auto" />
    </View>
  );
}
