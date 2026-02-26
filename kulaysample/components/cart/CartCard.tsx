import { View, Text, Pressable } from "react-native";
import { RootState, clearCart, addQuantityOfProduct, removeQuantityOfProduct } from "../../utils/store";
import { CartItem } from "@/types/cart";

export default function CartCard({
    dispatch,
    item,
    handleDecreaseQuantity,
    handleIncreaseQuantity
}: {
    dispatch: any,
    item: CartItem,
    handleDecreaseQuantity: any,
    handleIncreaseQuantity: any
}){
    return(
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
    )
}