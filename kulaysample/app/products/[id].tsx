import { Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react";
import { Product } from "@/types/product";
import sampleProducts from "../../assets/sampleProducts.json";
import { useLocalSearchParams } from "expo-router";
import { images } from "@/utils/images";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FullProduct() {
    const params = useLocalSearchParams<{ id: string }>();
    const id = params.id;
    const product: Product | undefined = sampleProducts.find(
        (p) => p.id === id
    );
    if (!id) return <Text>Product not found</Text>;
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const totalPrice = (product?.price ?? 0) * selectedQuantity;

    const handleIncreaseQuantity = () => {
        if(product?.price){
            setSelectedQuantity(prev => prev + 1);
        }
    }

    const handleDecreaseQuantity = () => {
        if(product?.price && selectedQuantity > 0){
            setSelectedQuantity(prev => prev - 1);
        }
    }

    if (!product) return <Text>Product not found</Text>;

    return(
        <SafeAreaView className="flex self-center items-center md:w-1/2 w-full shadow bg-white h-full">
            <View className="w-full md:h-72 h-56 overflow-hidden items-center justify-center">
                <Image
                    source={images[product.image]}
                    className="flex-1"
                    resizeMode="cover"
                />
            </View>
            <View className="p-4 w-full">
                <View className="flex-1 flex-row justify-between items-center w-full">
                    <Text className="text-xl font-bold">{product.productName}</Text>
                    <Text className="text-xl font-bold">PHP{product.price}</Text>
                </View>
                <Text className="text-md">{product.description}</Text>
            </View>
            <View className="w-24 flex flex-row items-center justify-between">
                <Pressable
                    onPress={handleDecreaseQuantity}
                    className="rounded-full bg-green p-2 flex items-center justify-center"
                >
                    <Text className="font-black">-</Text>
                </Pressable>
                <Text>{selectedQuantity}</Text>
                <Pressable
                    onPress={handleIncreaseQuantity}
                    className="rounded-full bg-green p-2 flex items-center justify-center"
                >
                    <Text className="font-black">+</Text>
                </Pressable>
            </View>
            <View className="absolute bottom-10">
                <Pressable
                    onPress={() => {}}
                    className="rounded-full w-64 bg-green px-4 py-4 flex flex-row items-center justify-between"
                >
                    <Text className="text-lg font-semibold">Add to Cart</Text>
                    <Text className="text-lg font-semibold">{totalPrice.toFixed(2)}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}