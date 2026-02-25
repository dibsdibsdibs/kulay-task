import { Text, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductGallery({
    productsList,
}:{
    productsList: any,
}){
    return(
        <View className="flex flex-1 gap-4 flex-row mt-2">
            {productsList.map((product: any, index: number) => (
                <ProductCard
                    key={index}
                    product={product}
                />
            ))}
        </View>
    )
}