import { Text, View } from "react-native";
import ProductGallery from "../components/ProductGallery";
import sampleProducts from "../assets/sampleProducts.json";

export const options = {
  title: "KulaySample",
  headerShown: true,
};

export default function Index() {
  return (
    <View className="flex-1 p-8">
      <Text className="font-black text-5xl">MENU</Text>
      <ProductGallery productsList={sampleProducts} />
    </View>
  );
}