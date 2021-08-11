import React from "react";

import { SafeArea } from "../atoms/utility/safe-area.component";

export const PageTemplate: React.FC<{ style?: Object }> = ({
  children,
  style,
}) => {
  return <SafeArea style={style}>{children}</SafeArea>;
};
