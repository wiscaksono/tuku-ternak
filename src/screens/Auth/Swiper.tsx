import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

const data = [
  {
    image: require("../../assets/swipe/swipe-1.png"),
    title: "Lebih dari 300 Ternak yang dipasarkan setiap harinya",
    description:
      "Tukuternak telah berkerja sama dengan penjual-penjual di seluruh Indonesia untuk memasarkan Ternak mereka",
  },
  {
    image: require("../../assets/swipe/swipe-2.png"),
    title: "Mudah dalam Pembelian dan Pembayaran",
    description:
      "Kami menawarkan fitur kemudahan dalam bertransaksi jual beli dan kemudahan pembayaran",
  },
  {
    image: require("../../assets/swipe/swipe-3.png"),
    title: "Ternak Berkualitas dan Harga Terjangkau",
    description:
      "Kami menjual Ternak berkualitas dan terbaik tentunya agar Anda puas",
  },
];

export default function Swiper() {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView className="mx-7 items-center justify-between flex-1">
      <View className="flex-row self-end">
        <TouchableOpacity onPress={() => setIndex(index + 1)}>
          <Text className="text-base py-2.5 font-medium text-primary">
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-evenly items-center">
        <Image source={data[index].image} />
        <View>
          <Text className="text-2xl font-medium text-center mb-8">
            {data[index].title}
          </Text>
          <Text className="text-sm text-gray-4 leading-[30px] text-center">
            {data[index].description}
          </Text>
        </View>
      </View>

      <View className="flex-row gap-x-2">
        {data.map((_, i) => (
          <View
            key={i}
            className={`w-7 h-1 rounded-full ${
              i === index ? "bg-primary" : "bg-primary/20"
            }`}
            onTouchStart={() => setIndex(i)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
