import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CandleDetails from './pages/CandleDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contactbar from './components/Contactbar';
import CartPage from './pages/Cart';
import AllProduct from './pages/AllProduct';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Contactbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candle/:name" element={<CandleDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/all-product" element={<AllProduct />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
