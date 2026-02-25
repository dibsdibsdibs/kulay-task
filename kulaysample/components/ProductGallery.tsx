import { Text, View } from "react-native";
import Product from "./Product";

export default function ProductGallery(){
    return(
        <View className="flex flex-1 gap-2 flex-row mt-2">
            <Product />
            <Product />
            <Product />
            <Product />
        </View>
    )
}