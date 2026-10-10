import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopGrid from "./pages/shop-grid.jsx";
import ShopGrid2 from "./pages/shop-grid-2.jsx";
import ShopRightSidebar from "./pages/shop-right-sidebar.jsx";
import ShopFullWidth from "./pages/shop-Full-Width.jsx";
import ShopWishlist from "./pages/shop-wishlist.jsx";
import ShopCart from "./pages/shop-cart.jsx";
import ShopChekout from "./pages/shop-checkout.jsx";
import ProductPage from "./pages/productsingle.jsx";
import ProductPage2 from "./pages/productsingle2.jsx";
import ProductPage3 from "./pages/productsingle3.jsx";
import ProductPage4 from "./pages/productsingle4.jsx";

import { CardProvider } from "./context/cartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

function App() {
  return (
    <>
      <CardProvider>
        <WishlistProvider>
          <Router>
            <Routes>
              <Route path="/" element={<ShopGrid />} />
              <Route path="/shop-grid-2" element={<ShopGrid2 />} />
              <Route
                path="/shop-right-sidebar"
                element={<ShopRightSidebar />}
              />
              <Route path="/shop-full-width" element={<ShopFullWidth />} />
              <Route path="/ShopWishlist" element={<ShopWishlist />} />
              <Route path="/shop-cart" element={<ShopCart />} />
              <Route path="/shop-chekout" element={<ShopChekout />} />
              <Route path="/ProductPage" element={<ProductPage />} />
              <Route path="/ProductPage2" element={<ProductPage2 />} />
              <Route path="/ProductPage3" element={<ProductPage3 />} />
              <Route path="/ProductPage4" element={<ProductPage4 />} />
            </Routes>
          </Router>
        </WishlistProvider>
      </CardProvider>
    </>
  );
}

export default App;
