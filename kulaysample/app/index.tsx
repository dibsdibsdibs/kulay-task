import { Text, View } from "react-native";
import ProductGallery from "../components/product/ProductGallery";
import sampleProducts from "../assets/sampleProducts.json";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  return (
    <View className="flex-1 md:p-4 p-2 self-center items-center md:w-1/2 w-full h-full shadow bg-white">
      <ProductGallery productsList={sampleProducts} />
    </View>
  );
}