import { Text, View, Image } from "react-native";
import { images } from "../utils/images";
import { Product } from "@/types/product";

export default function ProductCard({
    product
} : {
    product: Product
}) {
    return (
        <View className="flex flex-col w-40 h-64 bg-emerald-500 shadow p-4 items-center rounded-lg shadow">
            <View className="w-24 h-24 rounded-lg overflow-hidden items-center justify-center">
                <Image
                    source={images[product.image]}
                    className="flex-1"
                    resizeMode="contain"
                />
            </View>
            <Text className="mt-2 font-black">{product.productName}</Text>
            <Text className="text-gray-100 text-sm">{product.description}</Text>
            <Text className="font-bold">PHP{product.price}</Text>
        </View>
    );
}