import React from "react";

import { SafeArea } from "../atoms/utility/safe-area.component";

export const PageTemplate: React.FC = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};
