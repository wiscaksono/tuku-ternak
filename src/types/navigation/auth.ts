import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackNavigatorParamList = {
  Swiper: undefined;
  Options: undefined;
  Login: undefined;
  Register: undefined;
  Verification: undefined;
};

export type AuthScreenNavigationProp =
  NativeStackNavigationProp<AuthStackNavigatorParamList>;
