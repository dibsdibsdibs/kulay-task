import { Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react";
import { Product } from "@/types/product";
import sampleProducts from "../../assets/sampleProducts.json";
import { useLocalSearchParams } from "expo-router";
import { images } from "@/utils/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootState, clearCart, addQuantityOfProduct, removeQuantityOfProduct } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    console.log(cart);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const handleIncreaseQuantity = (id: string) => {
        dispatch(addQuantityOfProduct(id));
    }

    const handleDecreaseQuantity = (id: string) => {
        dispatch(removeQuantityOfProduct(id));
    }

    return(
        <View className="p-4">
            <View className="items-center flex flex-row justify-between">
                <Text className="font-semibold text-lg">ITEMS</Text>
                <Pressable
                    onPress={() => dispatch(clearCart())}
                    className=""
                >
                    <Text className="text-red-500 text-lg font-semibold">Remove All</Text>
                </Pressable>
            </View>
            {cart.length === 0 ? (
                <Text>Your cart is empty</Text>
            ) : (
                cart.map(item => (
                    <View key={item.id} className="flex-row justify-between items-center my-2">
                        <Text className="font-bold text-lg">{item.name}</Text>
                        <View className="flex flex-row items-center gap-2">
                            <Pressable
                                onPress={() => {handleDecreaseQuantity(item.id)}}
                                className="rounded-full bg-green w-8 h-8 flex items-center justify-center"
                            >
                                <Text className="font-black text-2xl text-white">-</Text>
                            </Pressable>
                            <Text className="font-medium">{item.quantity}</Text>
                            <Pressable
                                onPress={() => {handleIncreaseQuantity(item.id)}}
                                className="rounded-full bg-green w-8 h-8 flex items-center justify-center"
                            >
                                <Text className="font-black text-2xl text-white">+</Text>
                            </Pressable>
                        </View>
                        <Text className="font-medium">PHP {(item.price * item.quantity).toFixed(2)}</Text>
                    </View>
                ))
            )}
            <View className="flex flex-row items-center">
                <Text>Total:</Text>
                <Text className="text-2xl font-bold">{total}</Text>
            </View>
        </View>
    )
}