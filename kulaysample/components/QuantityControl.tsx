import { View, Pressable, Text } from "react-native";

export default function QuantityControl({
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    quantity
} : {
    handleDecreaseQuantity: any,
    handleIncreaseQuantity: any,
    quantity: any,
}){
    return(
        <View className="w-24 flex flex-row items-center justify-between">
            <Pressable
                onPress={handleDecreaseQuantity}
                className="rounded-full bg-green w-8 h-8 flex items-center justify-center"
            >
                <Text className="font-black text-2xl text-white">-</Text>
            </Pressable>
            <Text className="text-lg font-semibold">{quantity}</Text>
            <Pressable
                onPress={handleIncreaseQuantity}
                className="rounded-full bg-green w-8 h-8 flex items-center justify-center"
            >
                <Text className="font-black text-2xl text-white">+</Text>
            </Pressable>
        </View>
    )
}