import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigatorParamList } from "../types/navigation/auth";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Swiper from "../screens/Auth/Swiper";
import Options from "../screens/Auth/Options";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Verification from "../screens/Auth/Verification";

const AuthNavigator = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStack = () => {
  const { goBack } = useNavigation();

  return (
    <AuthNavigator.Navigator>
      <AuthNavigator.Screen
        name="Swiper"
        component={Swiper}
        options={{
          headerShown: false,
        }}
      />

      <AuthNavigator.Screen
        name="Options"
        component={Options}
        options={{
          headerShown: false,
        }}
      />

      <AuthNavigator.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#485167"
              onPress={() => goBack()}
            />
          ),
        }}
      />

      <AuthNavigator.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#485167"
              onPress={() => goBack()}
            />
          ),
        }}
      />

      <AuthNavigator.Screen
        name="Verification"
        component={Verification}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#485167"
              onPress={() => goBack()}
            />
          ),
        }}
      />
    </AuthNavigator.Navigator>
  );
};

export default AuthStack;
