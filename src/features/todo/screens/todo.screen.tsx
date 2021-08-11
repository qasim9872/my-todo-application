import React from "react";
import { Text } from "react-native";
import { PageTemplate } from "../../../components/templates/page.template";

import tw from "../../../styles/tailwind";

export const TodoScreen = () => {
  return (
    <PageTemplate style={tw`items-center justify-center`}>
      <Text style={tw`text-black`}>
        Open up App.tsx to start working on your app!
      </Text>
    </PageTemplate>
  );
};
