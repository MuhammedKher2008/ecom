import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);

      let updatedWishlist;

      if (exists) {
        updatedWishlist = prevWishlist.filter((item) => item.id !== product.id);
      } else {
        updatedWishlist = [...prevWishlist, product];
      }

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return updatedWishlist;
    });
  };

  const RemoveFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter(
        (item) => item.id !== productId,
      );

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return updatedWishlist;
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        RemoveFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
