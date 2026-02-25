import { Text, View, Image } from "react-native";
import { Product } from "@/types/product";
import sampleProducts from "../../assets/sampleProducts.json";
import { useLocalSearchParams } from "expo-router";
import { images } from "@/utils/images";

export default function FullProduct() {
    const params = useLocalSearchParams<{ id: string }>();
    const id = params.id;

    if (!id) return <Text>Product not found</Text>;

    const product: Product | undefined = sampleProducts.find(
        (p) => p.id === id
    );

    if (!product) return <Text>Product not found</Text>;

    return(
        <View>
            <View className="w-24 h-24 rounded-lg overflow-hidden items-center justify-center">
                <Image
                    source={images[product.image]}
                    className="flex-1"
                    resizeMode="contain"
                />
            </View>
            <Text className="font-black">{product.productName}</Text>
            <Text className="text-sm">{product.description}</Text>
            <Text className="font-bold">PHP{product.price}</Text>
        </View>
    )
}