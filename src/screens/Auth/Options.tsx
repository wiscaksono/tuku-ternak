import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import type { AuthScreenNavigationProp } from "../../types/navigation/auth";

import { TukuTernakOutlined } from "../../components/logo/TukuTernak";

export default function Options() {
  const { navigate } = useNavigation<AuthScreenNavigationProp>();

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="mx-3 my-2.5 flex-1">
        <View className="flex-row space-x-2">
          <TukuTernakOutlined />
          <Text className="font-bold text-xl text-gray-3">Tuku-Ternak</Text>
        </View>

        <View className="justify-between flex-1 items-center">
          <Image
            className="mt-16"
            source={require("../../assets/auth-menu.png")}
          />
          <View>
            <View className="space-y-4 mb-10">
              <TouchableOpacity
                className="bg-primary rounded"
                onPress={() => navigate("Login")}
              >
                <Text className="text-sm py-3 font-medium text-white text-center">
                  Masuk
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-transparent rounded border border-gray-5"
                onPress={() => navigate("Register")}
              >
                <Text className="text-sm py-3 font-medium text-gray-5 text-center">
                  Daftar Sekarang
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-transparent rounded border border-gray-5">
                <Text className="text-sm py-3 font-medium text-gray-5 text-center">
                  Masuk dengan Google
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-xs text-gray-3 leading-[20px]">
              Dengan masuk atau mendaftar, kamu menyetujui{" "}
              <Text className="text-primary">Ketentuan Layanan</Text> dan{" "}
              <Text className="text-primary">Kebijakan Privasi</Text>.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
