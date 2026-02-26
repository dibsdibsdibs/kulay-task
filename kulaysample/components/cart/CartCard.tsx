import { View, Text, Pressable, Image } from "react-native";
import { RootState, clearCart, addQuantityOfProduct, removeQuantityOfProduct } from "../../utils/store";
import { CartItem } from "@/types/cart";
import { images } from "@/utils/images";
import QuantityControl from "../QuantityControl";

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
                <View className="w-24 h-24 rounded-lg overflow-hidden items-center justify-center">
                    <Image
                        source={images[item.image]}
                        className="flex-1"
                        resizeMode="contain"
                    />
                </View>
                <View className="flex flex-col gap-2">
                    <Text className="font-semibold text-lg">{item.name}</Text>
                    <QuantityControl 
                        handleDecreaseQuantity={() => {handleDecreaseQuantity(item.id)}}
                        handleIncreaseQuantity={() => {handleIncreaseQuantity(item.id)}}
                        quantity={item.quantity}
                    />
                </View>
            </View>
            <View className="flex items-center">
                <Text className="font-medium text-right">{(item.price * item.quantity).toFixed(2)}</Text>
            </View>
        </View>
    )
}