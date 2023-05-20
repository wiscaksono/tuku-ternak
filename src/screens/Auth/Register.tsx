import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { AuthScreenNavigationProp } from "../../types/navigation/auth";

import { TukuTernakFilled } from "../../components/logo/TukuTernak";

export default function Register() {
  const { navigate } = useNavigation<AuthScreenNavigationProp>();

  const [values, setValues] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid = () => {
    const { email, phone, password, confirmPassword } = values;
    return (
      email !== "" &&
      phone !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    );
  };

  return (
    <ScrollView className="border-t border-[#DEDEDE] bg-white flex-1">
      <View className="mx-3 my-4 flex-1 justify-between">
        <View>
          <TukuTernakFilled />
          <Text className="mt-4 mb-1 text-2xl font-medium text-gray-2">
            Registrasi untuk Tukuternak
          </Text>
          <Text className="mb-11 text-sm text-gray-3 leading-[30px]">
            Isikan data-data dibawah ini dengan benar.
          </Text>

          <View className="space-y-6 mb-6">
            <View>
              <Text className="text-xs font-medium text-gray-3 mb-2">
                Email
              </Text>
              <View className="flex-row space-x-2">
                <TextInput
                  placeholder="kitabisa@example.com"
                  keyboardType="email-address"
                  placeholderTextColor={"#969BA8"}
                  className="bg-input p-3 rounded-lg border border-border text-gray-2 flex-1"
                  onChangeText={(text) => setValues({ ...values, email: text })}
                  autoCapitalize="none"
                />
              </View>
            </View>
            <View>
              <Text className="text-xs font-medium text-gray-3 mb-2">
                Nomer Telepon
              </Text>
              <View className="flex-row space-x-2">
                <TextInput
                  placeholder="+62"
                  editable={false}
                  placeholderTextColor={"#2E3851"}
                  className="bg-input p-3 rounded-lg border border-border text-gray-2"
                />
                <TextInput
                  placeholder="8723124343"
                  keyboardType="numeric"
                  placeholderTextColor={"#969BA8"}
                  className="bg-input p-3 rounded-lg border border-border text-gray-2 flex-1"
                  onChangeText={(text) => setValues({ ...values, phone: text })}
                />
              </View>
            </View>
            <View>
              <Text className="text-xs font-medium text-gray-3 mb-2">
                Password
              </Text>
              <View className="flex-row space-x-2">
                <TextInput
                  keyboardType="default"
                  placeholderTextColor={"#969BA8"}
                  className="bg-input p-3 rounded-lg border border-border text-gray-2 flex-1"
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    setValues({ ...values, password: text })
                  }
                />
              </View>
            </View>
            <View>
              <Text className="text-xs font-medium text-gray-3 mb-2">
                Ulangi Password
              </Text>
              <View className="flex-row space-x-2">
                <TextInput
                  keyboardType="default"
                  placeholderTextColor={"#969BA8"}
                  className="bg-input p-3 rounded-lg border border-border text-gray-2 flex-1"
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    setValues({ ...values, confirmPassword: text })
                  }
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            className="bg-primary rounded"
            disabled={!isFormValid()}
          >
            <Text className="text-sm py-3 font-medium text-white text-center">
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
        <View className="justify-center items-center flex-row">
          <Text className="text-sm py-3 font-medium text-gray-3 text-center">
            Sudah punya akun?
          </Text>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            className="flex items-center"
          >
            <Text className="text-primary"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
