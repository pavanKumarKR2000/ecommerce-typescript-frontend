import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  productId: number;
  productImage: string;
  productName: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[] | [];
  totalQuantity: number;
  setCartItem: (
    productId: number,
    productName: string,
    productImage: string,
    quantity: number
  ) => void;
  clearCartItem: () => void;
  getCartItem: (productId: number) => CartItem | undefined;
  removeCartItem: (productId: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      totalQuantity: 0,
      getCartItem: (productId: number) => {
        const cartItem = get().cart.find(
          (item) => item.productId === productId
        );
        return cartItem;
      },
      setCartItem: (
        productId: number,
        productName: string,
        productImage: string,
        quantity: number
      ) =>
        set((state) => {
          const cartItem = state.cart.find(
            (item) => item.productId === productId
          );
          let newCart = [];

          if (cartItem) {
            newCart = [
              ...state.cart.filter((item) => item.productId !== productId),
              { productId, productName, productImage, quantity },
            ];
          } else {
            newCart = [
              ...state.cart,
              { productId, productName, productImage, quantity },
            ];
          }

          let totalQuantity = 0;

          newCart.forEach((item) => {
            totalQuantity += item.quantity;
          });

          set({ totalQuantity });

          return { cart: newCart };
        }),
      removeCartItem: (productId: number) => {
        const newCart = get().cart.filter(
          (item) => item.productId !== productId
        );
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
