import { Text, View } from "react-native";
import ProductGallery from "../components/ProductGallery";
import sampleProducts from "../assets/sampleProducts.json";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 md:p-8 p-2">
      <Text className="font-bold text-3xl">MENU</Text>
      <ProductGallery productsList={sampleProducts} />
    </View>
  );
}