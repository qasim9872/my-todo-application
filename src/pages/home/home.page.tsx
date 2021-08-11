import React from "react";
import { Text } from "react-native";
import { PageTemplate } from "../../components/templates/page.template";

import tw from "../../styles/tailwind";

export const Home = () => {
  return (
    <PageTemplate style={tw`justify-center items-center`}>
      <Text style={tw`text-black font-poppins`}>
        Open up App.tsx to start working on your app!
      </Text>
    </PageTemplate>
  );
};
