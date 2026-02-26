import { Text, View, Image, Pressable } from "react-native";
import { images } from "../utils/images";
import { Product } from "@/types/product";

export default function ProductCard({
    product,
    onPress,
} : {
    product: Product
    onPress: () => void,
}) {
    return (
        <Pressable 
            className="flex flex-row md:h-72 w-full h-32 gap-2 bg-white-500 p-2 md:p-4 items-center border-0 border-b-2 border-gray-300 "
            onPress={onPress}
        >
            <View className="md:w-60 md:h-60 w-28 h-28 rounded-lg overflow-hidden items-center justify-center">
                <Image
                    source={images[product.image]}
                    className="flex-1"
                    resizeMode="contain"
                />
            </View>
            <View className="flex-1 min-w-0 w-full items-left h-full">
                <Text className="mt-2 font-bold text-md">{product.productName}</Text>
                <Text className="text-xs font-gray" numberOfLines={2} ellipsizeMode="tail">{product.description}</Text>
                <Text className="font-semibold mt-2">PHP{product.price}</Text>
            </View>
        </Pressable >
    );
}