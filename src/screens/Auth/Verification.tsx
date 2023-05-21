import { useState, useEffect } from "react";
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

export default function Verification() {
  const { navigate } = useNavigation<AuthScreenNavigationProp>();

  const [countdown, setCountdown] = useState(60);
  const [values, setValues] = useState({
    email: "",
  });

  useEffect(() => {
    const timer =
      countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <ScrollView className="border-t border-[#DEDEDE] bg-white flex-1">
      <View className="mx-3 my-4 flex-1 justify-between">
        <View>
          <TukuTernakFilled />
          <Text className="mt-4 mb-1 text-2xl font-medium text-gray-2">
            Verifikasi Nomer Telepon
          </Text>
          <Text className="mb-11 text-sm text-gray-3 leading-[30px]">
            Masukan kode verifikasi dari nomer +62 826 7161 762, silahkan
            periksa SMS anda.
          </Text>

          <View className="mb-6">
            <TextInput
              placeholder="kitabisa@example.com"
              keyboardType="email-address"
              placeholderTextColor={"#969BA8"}
              className="bg-input p-3 rounded-lg border border-border text-gray-2 flex-1"
              onChangeText={(text) => setValues({ ...values, email: text })}
              autoCapitalize="none"
            />
            <Text className="text-xs text-gray-5 mt-1 text-end ml-auto">
              Sisa Waktu ({countdown} detik)
            </Text>
          </View>

          <TouchableOpacity className="bg-primary rounded">
            <Text className="text-sm py-3 font-medium text-white text-center">
              Verifikasi
            </Text>
          </TouchableOpacity>
        </View>
        <View className="justify-center items-center flex-row">
          <Text className="text-sm py-3 text-gray-3 text-center">
            Tidak Menerima Kode Verifikasi?
          </Text>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            className="flex items-center"
          >
            <Text className="text-primary"> Kirim Ulang Kode</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
