import React, { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    try {
      const savedCards = localStorage.getItem("cards");
      return savedCards ? JSON.parse(savedCards) : [];
    } catch (error) {
      console.error("Sepet yüklenemedi:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addToCard = (product) => {
    setCards((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCard = (productId) => {
    setCards((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCards((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const totalitems = cards.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const totalprice = cards.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0,
  );

  return (
    <CardContext.Provider
      value={{
        cards,
        addToCard,
        removeFromCard,
        updateQuantity,
        totalitems,
        totalprice,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
