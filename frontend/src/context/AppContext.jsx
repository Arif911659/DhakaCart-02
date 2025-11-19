import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')||'[]'));

  useEffect(()=> localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const p = prev.find(i=>i.id===product.id);
      if(p) return prev.map(i=> i.id===product.id ? {...i, qty: i.qty+1 } : i);
      return [...prev, {...product, qty:1}];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i=>i.id!==id));
  const clearCart = () => setCart([]);

  const login = async (email,password) => {
    const res = await axios.post('/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
    return res;
  };

  return <AppContext.Provider value={{ user, cart, addToCart, removeFromCart, clearCart, login, setUser }}>
    {children}
  </AppContext.Provider>;
};
