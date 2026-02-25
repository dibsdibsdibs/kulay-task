import { Text, View } from "react-native";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

export default function ProductGallery({
    productsList,
}:{
    productsList: Product[],
}){
    return(
        <View className="flex flex-1 gap-4 flex-row mt-2">
            {productsList.map((product: Product, index: number) => (
                <ProductCard
                    key={index}
                    product={product}
                />
            ))}
        </View>
    )
}