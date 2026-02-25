import { Text, View, Image } from "react-native";

export default function Product() {
    const testName = "testName";
    const testDescription = "test description test description test description";
    const testPrice = 100;

    return (
        <View className="flex flex-col w-36 h-56 bg-emerald-500 shadow p-4 items-center rounded-lg">
            <View className="w-20 h-20 rounded-lg overflow-hidden items-center justify-center">
                <Image
                    source={require('../assets/images/burger.jpg')}
                    className="flex-1"
                    resizeMode="contain"
                />
            </View>
            <Text className="mt-2 font-black">{testName}</Text>
            <Text className="text-gray-100 text-sm">{testDescription}</Text>
            <Text className="mt-1 font-bold">PHP{testPrice}</Text>
        </View>
    );
}