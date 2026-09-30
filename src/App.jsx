import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopGrid from "./pages/shop-grid.jsx";

import { CardProvider } from "./context/cartContext.jsx";

function App() {
  return (
    <>
      <CardProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ShopGrid />} />
          </Routes>
        </Router>
      </CardProvider>
    </>
  );
}

export default App;
