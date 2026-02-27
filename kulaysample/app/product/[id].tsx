import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { Product } from "@/types/product";
import sampleProducts from "../../assets/sampleProducts.json";
import { useLocalSearchParams } from "expo-router";
import { images } from "@/utils/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { addToCart } from "@/utils/store";
import { useRouter } from "expo-router";
import QuantityControl from "@/components/QuantityControl";

export default function FullProductScreen() {
    const params = useLocalSearchParams<{ id: string }>();
    const id = params.id;
    const dispatch = useDispatch();
    const router = useRouter();
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

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.productName,
                price: product.price,
                quantity: selectedQuantity,
                image: product.image,
            })
        );
        router.back();
    };

    return(
        <SafeAreaView className="flex flex-col self-center items-center md:w-1/2 w-full h-full shadow bg-white">
            <View className="w-full md:h-96 h-64 overflow-hidden items-center justify-center">
                <Image
                    source={images[product.image]}
                    className="flex-1"
                    resizeMode="contain"
                />
            </View>
            <View className="px-6 mt-4 w-full flex flex-col gap-2 overflow-scroll">
                <View className="flex-row items-center w-full">
                    <Text className="text-2xl font-semibold flex-1 mr-2">
                        {product.productName}
                    </Text>
                    <QuantityControl 
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        quantity={selectedQuantity}
                    />
                </View>
                <Text className="text-4xl font-bold text-green">{product.price}</Text>
                <Text className="text-base">{product.description}</Text>
            </View>
            <View className="absolute bottom-20">
                <Pressable
                    onPress={handleAddToCart}
                    className="rounded-full w-64 bg-green px-8 py-4 flex flex-row items-center justify-between"
                >
                    <Text className="text-lg font-semibold text-white">Add to Cart</Text>
                    <Text className="text-lg font-semibold text-white">{totalPrice.toFixed(2)}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}