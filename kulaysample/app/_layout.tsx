import { Button } from "@react-navigation/elements";
import "../global.css";
import { Stack } from "expo-router";
import CartButton from "../components/header/CartButton";
import { Provider } from "react-redux";
import { store } from "../utils/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "KulaySampleMenu",
            headerRight: () => <CartButton />,
          }}
        />
        <Stack.Screen
          name="products/[id]"
          options={{
            title: "Details",
          }}
        />
        <Stack.Screen
          name="cart/cart"
          options={{
            title: "Order Details",
          }}
        />
      </Stack>
    </Provider>
  );
}