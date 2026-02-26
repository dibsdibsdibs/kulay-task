import { Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function CartButton(){
    const router = useRouter();
    
    return(
        <Pressable
            onPress={() => router.push("/cart/cart")}
            className="p-1"
        >
            <Image
                source={require("../../assets/icons/cart.png")}
                className="w-8 h-8"
                resizeMode="contain"
            />
        </Pressable>
    )
}