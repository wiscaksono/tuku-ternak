import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./Tabs";
import AuthStack from "./AuthStack";

const RootNavigator = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
