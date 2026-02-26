import { Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react";
import { Product } from "@/types/product";
import sampleProducts from "../../assets/sampleProducts.json";
import { useLocalSearchParams } from "expo-router";
import { images } from "@/utils/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootState, clearCart, addQuantityOfProduct, removeQuantityOfProduct } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "@/components/cart/CartCard";

export default function CartScreen() {
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
        <View className="flex flex-col p-4 self-center items-center md:w-1/2 w-full h-full shadow bg-white">
            <View className="w-full">
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
                    cart.map((item, index) => (
                        <CartCard 
                            key={index} 
                            item={item} 
                            dispatch={dispatch}
                            handleDecreaseQuantity={handleDecreaseQuantity}
                            handleIncreaseQuantity={handleIncreaseQuantity}
                        />
                    ))
                )}
                <View className="flex flex-row items-center justify-end gap-2">
                    <Text>Total:</Text>
                    <Text className="text-xl font-bold">{total}</Text>
                </View>
            </View>
        </View>
    )
}