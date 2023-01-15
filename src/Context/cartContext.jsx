import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
const [prod,setProd]=useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const setProduct = (product) => {
    setProd(product);
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  }; 
  const value = { cart, prod,addToCart, removeFromCart,updateCart,setProduct };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
