import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { AuthScreenNavigationProp } from "../../types/navigation/auth";

import { TukuTernakFilled } from "../../components/logo/TukuTernak";

export default function Login() {
  const { navigate } = useNavigation<AuthScreenNavigationProp>();
  return (
    <SafeAreaView className="border-t border-[#DEDEDE] bg-white flex-1">
      <View className="mx-3 my-4 flex-1 justify-between">
        <View>
          <TukuTernakFilled />
          <Text className="mt-4 mb-1 text-2xl font-medium text-gray-2">
            Login untuk Tukuternak
          </Text>
          <Text className="mb-11 text-sm text-gray-3 leading-[30px]">
            Masukan nomer telpon anda untuk masuk ke {"\n"}halaman tuku ternak.
          </Text>

          <Text className="text-xs font-medium text-gray-3 mb-2">
            Nomer Telepon
          </Text>
          <View className="flex-row space-x-2 mb-6">
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
            />
          </View>
          <TouchableOpacity className="bg-primary rounded">
            <Text className="text-sm py-3 font-medium text-white text-center">
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
        <View className="justify-center items-center flex-row">
          <Text className="text-sm py-3 font-medium text-gray-3 text-center">
            Belum punya akun?
          </Text>
          <TouchableOpacity
            onPress={() => navigate("Register")}
            className="flex items-center"
          >
            <Text className="text-primary"> Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
