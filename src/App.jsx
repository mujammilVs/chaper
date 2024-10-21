import React, { useEffect } from "react";
import Header from "./components/Header/Header";

import ProductDisplay from "./components/Home/ProductDisplay/ProductDisplay";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import ThankYou from "./components/ThankYou/ThankYou";
import AddToCartModal from "./components/AddToCartModal/AddToCartModal";
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route's pathname

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [pathname]); // Effect triggered whenever pathname changes (i.e., route changes)

  return null; // This component doesn’t render anything visually
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
     
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/addtocartmodal" element={<AddToCartModal/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
