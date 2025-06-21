import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[] | [];
  totalQuantity: number;
  setCartItem: (id: number, quantity: number) => void;
  clearCartItem: () => void;
  getCartItem: (id: number) => CartItem | undefined;
  removeCartItem: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      totalQuantity: 0,
      getCartItem: (id: number) => {
        const cartItem = get().cart.find((item) => item.id === id);
        return cartItem;
      },
      setCartItem: (id: number, quantity: number) =>
        set((state) => {
          const cartItem = state.cart.find((item) => item.id === id);
          let newCart = [];

          if (cartItem) {
            newCart = [
              ...state.cart.filter((item) => item.id !== id),
              { id, quantity },
            ];
          } else {
            newCart = [...state.cart, { id, quantity }];
          }

          let totalQuantity = 0;

          newCart.forEach((item) => {
            totalQuantity += item.quantity;
          });

          set({ totalQuantity });

          return { cart: newCart };
        }),
      removeCartItem: (id: number) => {
        const newCart = get().cart.filter((item) => item.id !== id);
        let totalQuantity = 0;

        newCart.forEach((item) => {
          totalQuantity += item.quantity;
        });

        set({ totalQuantity });
        set({ cart: newCart });
      },
      clearCartItem: () => set({ cart: [] }),
    }),
    {
      name: "cart-store", // key in localStorage
      // storage: typeof window !== "undefined" ? localStorage : undefined,
    }
  )
);
