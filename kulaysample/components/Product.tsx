import { Text, View } from "react-native";
import { Product } from "@/types/product";

export default function Product({
    product,
}:{
    product: Product,
}){
    return(
        <View className="flex flex-1 gap-4 flex-row mt-2">
            <Text className="mt-2 font-black">{product.productName}</Text>
            <Text className="text-gray-100 text-sm">{product.description}</Text>
            <Text className="font-bold">PHP{product.price}</Text>
        </View>
    )
}