import { Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react";
import { Product } from "@/types/product";
import sampleProducts from "../../assets/sampleProducts.json";
import { useLocalSearchParams } from "expo-router";
import { images } from "@/utils/images";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FullProduct() {
    const navigation = useNavigation();
    const params = useLocalSearchParams<{ id: string }>();
    const id = params.id;
    const [selectedQuantity, setSelectedQuantity] = useState(1); 

    if (!id) return <Text>Product not found</Text>;

    const product: Product | undefined = sampleProducts.find(
        (p) => p.id === id
    );

    if (!product) return <Text>Product not found</Text>;

    useLayoutEffect(() => {
        navigation.setOptions({
          title: "KulaySample",
          headerShown: true,
        });
    }, [navigation]);

    const handleIncreaseQuantity = () => {
        setSelectedQuantity(prev => prev + 1);
    }

    const handleDecreaseQuantity = () => {
        if(selectedQuantity > 0) setSelectedQuantity(prev => prev - 1);
    }

    return(
        <SafeAreaView className="items-center flex-1">
            <View className="w-full h-36 overflow-hidden items-center justify-center">
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
                    onPress={handleIncreaseQuantity}
                    className="rounded-full bg-green p-2 flex items-center justify-center"
                >
                    <Text className="font-black">+</Text>
                </Pressable>
                <Text>{selectedQuantity}</Text>
                <Pressable
                    onPress={handleDecreaseQuantity}
                    className="rounded-full bg-green p-2 flex items-center justify-center"
                >
                    <Text className="font-black">-</Text>
                </Pressable>
            </View>
            <Pressable
                onPress={() => {}}
                className="rounded-full w-56 bg-green px-4 py-4 flex flex-row items-center justify-between"
            >
                <Text className="text-lg font-semibold">Add to Cart</Text>
                <Text className="text-lg font-semibold">{product.price}</Text>
            </Pressable>
        </SafeAreaView>
    )
}