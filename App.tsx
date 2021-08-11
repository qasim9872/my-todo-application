import React from "react";
import { View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as ReduxStoreProvider } from "react-redux";

import tw from "./src/styles/tailwind";
import { useFonts } from "./src/infrastructure/core/fonts";
import { TodoScreen } from "./src/features/todo/screens/todo.screen";
import { store } from "./src/redux/store";

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduxStoreProvider store={store}>
      <View style={tw`flex-1`}>
        <TodoScreen />
        <ExpoStatusBar style="auto" />
      </View>
    </ReduxStoreProvider>
  );
}
