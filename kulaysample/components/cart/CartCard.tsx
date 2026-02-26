import { View, Text, Pressable, Image } from "react-native";
import { RootState, clearCart, addQuantityOfProduct, removeQuantityOfProduct } from "../../utils/store";
import { CartItem } from "@/types/cart";
import { images } from "@/utils/images";

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
            <View className="flex-1 flex-row gap-2">
                <View className="md:w-24 md:h-24 rounded-lg overflow-hidden items-center justify-center">
                    <Image
                        source={images[item.image]}
                        className="flex-1"
                        resizeMode="contain"
                    />
                </View>
                <Text className="font-semibold text-lg">{item.name}</Text>
            </View>
            <View className="flex-1 flex-row items-center justify-center gap-3">
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
            <View className="flex-1">
                <Text className="font-medium text-center">PHP {(item.price * item.quantity).toFixed(2)}</Text>
            </View>
        </View>
    )
}