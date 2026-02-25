import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";

export default function Test(){
    verifyInstallation();
    
    return(
        <Text>
            testing
        </Text>
    )
}