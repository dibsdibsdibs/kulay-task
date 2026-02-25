import { Text, View } from "react-native";
import Test from "../components/Test";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="italic font-black">NativeWind Working</Text>
      <Test></Test>
    </View>
  );
}