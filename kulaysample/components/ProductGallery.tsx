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
        <View className="flex flex-1 md:gap-4 flex-row mt-2 flex-wrap overflow-auto p-1">
            {productsList.map((product: Product, index: number) => (
                <ProductCard
                    key={index}
                    product={product}
                    onPress={() => router.push(`./products/${product.id}`)}
                />
            ))}
        </View>
    )
}