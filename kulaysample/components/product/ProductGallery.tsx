import { Text, View } from "react-native";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { useRouter } from "expo-router";

export default function ProductGallery({
    productsList,
}:{
    productsList: Product[],
}){
    const router = useRouter();

    return(
        <View className="flex flex-1 flex-col mt-2 overflow-auto p-1">
            {productsList.map((product: Product, index: number) => (
                <ProductCard
                    key={index}
                    product={product}
                    onPress={() => router.push(`./product/${product.id}`)}
                />
            ))}
        </View>
    )
}