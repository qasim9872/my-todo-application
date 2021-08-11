import React, { ComponentProps } from "react";
import { StatusBar, SafeAreaView } from "react-native";

import tw from "../../../styles/tailwind";

export const SafeArea: React.FC<ComponentProps<typeof SafeAreaView>> = ({
  style,
  children,
  ...otherProps
}) => {
  return (
    <SafeAreaView
      style={[
        tw`flex-1 bg-ui-white`,
        StatusBar.currentHeight ? { marginTop: StatusBar.currentHeight } : {},
        style,
      ]}
      {...otherProps}
    >
      {children}
    </SafeAreaView>
  );
};
