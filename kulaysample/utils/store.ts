import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/types/cart";

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
        const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        addQuantityOfProduct: (state, action: PayloadAction<string>) => {
            const existing = state.items.find(i => i.id === action.payload);
            if (existing) {
                existing.quantity += 1;
            }
        },
        removeQuantityOfProduct: (state, action: PayloadAction<string>) => {
            const existing = state.items.find(i => i.id === action.payload);
            if (existing) {
                existing.quantity -= 1;
                if (existing.quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { 
    addToCart,
    clearCart,
    addQuantityOfProduct,
    removeQuantityOfProduct,
} = cartSlice.actions;

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;