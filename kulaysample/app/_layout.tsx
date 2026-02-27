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
            title: "Home",
            headerRight: () => <CartButton />,
          }}
        />
        <Stack.Screen
          name="product/[id]"
          options={{
            title: "Details",
          }}
        />
        <Stack.Screen
          name="cart/cart"
          options={{
            title: "Cart",
          }}
        />
      </Stack>
    </Provider>
  );
}