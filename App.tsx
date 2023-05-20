import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";
import Swiper from "./src/screens/Auth/Swiper";

export default function App() {
  return (
    <>
      <Swiper />
      {/* <RootNavigator /> */}
      <StatusBar style="inverted" />
    </>
  );
}
