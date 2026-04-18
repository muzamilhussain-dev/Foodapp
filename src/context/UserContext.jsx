import React, { createContext, useState, useMemo } from 'react';
import { food_items } from '../food';
export const dataContext = createContext();

function UserContext({children}) {
    let [Cate, setCate] = useState(food_items);
    let [input, setInput] = useState("");
    let [showCart, setShowCart] = useState(false);
    let [cart, setCart] = useState([]);
    let [selectedItem, setSelectedItem] = useState(null);
    let [toast, setToast] = useState(null);

    const showToast = (message) => {
        setToast(message);
        setTimeout(() => setToast(null), 3000);
    };

    const addToCart = (item) => {
        setCart(prevCart => {
            const isItemInCart = prevCart.find(cartItem => cartItem.id === item.id);
            if (isItemInCart) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, food_quantity: cartItem.food_quantity + 1 } : cartItem
                );
            }
            return [...prevCart, { ...item, food_quantity: 1 }];
        });
        showToast(`${item.food_name} added to cart!`);
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.food_quantity + delta);
                return { ...item, food_quantity: newQty };
            }
            return item;
        }));
    };

    const totalPrice = useMemo(() => {
        return cart.reduce((total, item) => total + (item.price * item.food_quantity), 0);
    }, [cart]);

    const clearCart = () => {
        setCart([]);
    };

    let data = {
        input,
        setInput,
        Cate,
        setCate,
        showCart,
        setShowCart,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        selectedItem,
        setSelectedItem,
        toast,
        clearCart
    }

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}

export default UserContext;
