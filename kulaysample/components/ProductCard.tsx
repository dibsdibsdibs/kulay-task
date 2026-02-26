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
            className="flex md:flex-col flex-row md:w-1/5 md:h-72 w-full h-32 gap-2 bg-white-500 shadow p-2 md:p-4 items-center rounded-lg shadow"
            onPress={onPress}
        >
            <View className="md:w-40 md:h-40 w-28 h-28 rounded-lg overflow-hidden items-center justify-center">
                <Image
                    source={images[product.image]}
                    className="flex-1"
                    resizeMode="contain"
                />
            </View>
            <View className="flex-1 min-w-0 w-full items-left h-full">
                <Text className="mt-2 font-black">{product.productName}</Text>
                <Text className="text-sm" numberOfLines={2} ellipsizeMode="tail">{product.description}</Text>
                <Text className="font-bold">PHP{product.price}</Text>
            </View>
        </Pressable >
    );
}