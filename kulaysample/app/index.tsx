'use dom';
import { Text, View } from "react-native";
import { verifyInstallation } from 'nativewind';
import Test from "../components/Test";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Test />
    </View>
  );
}
