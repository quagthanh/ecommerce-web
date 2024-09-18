import React, { createContext, useState ,useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length ; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const context_value = { all_product, cartItem, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={context_value}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;


