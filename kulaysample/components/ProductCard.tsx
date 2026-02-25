import { Text, View, Image } from "react-native";
import { images } from "../utils/images";

export default function ProductCard({
    product
} : {
    product: any
}) {
    const testName = "testName";
    const testDescription = "test description test description test description";
    const testPrice = 100;

    return (
        <View className="flex flex-col w-36 h-56 bg-emerald-500 shadow p-4 items-center rounded-lg shadow">
            <View className="w-20 h-20 rounded-lg overflow-hidden items-center justify-center">
                <Image
                    source={images[product.image]}
                    className="flex-1"
                    resizeMode="contain"
                />
            </View>
            <Text className="mt-2 font-black">{product.productName}</Text>
            <Text className="text-gray-100 text-sm">{product.description}</Text>
            <Text className="mt-1 font-bold">PHP{product.price}</Text>
        </View>
    );
}