import { Button } from "@react-navigation/elements";
import "../global.css";
import { Stack } from "expo-router";
import CartButton from "../components/header/CartButton";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerTintColor: "green",
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "",
          
        }}
      />
    </Stack>
  );
}