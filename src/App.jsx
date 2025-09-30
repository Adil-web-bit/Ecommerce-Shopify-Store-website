import Navbar from "./Components/Navbar/Navbar";
import ShopeCategory from "./Pages/ShopeCategory";
import Shope from "./Pages/Shope";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import men_banner from "./assets/banner.jpg";
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shope />} />
          <Route path="/mens" element={<ShopeCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopeCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopeCategory banner={kids_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
