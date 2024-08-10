import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import bg from "./assets/bg.svg";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AllMovies from "./pages/allMovies";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import { useState } from "react";




function App() {
 const [isOpen, setIsOpen] = useState('hidden')
 
  const handlePopupOpen  = () =>{
    setIsOpen('flex');
  }
  const handlePopupClose  = () =>{
    setIsOpen('hidden');
  }
  return (
    <Router>
        <Popup isOpen={isOpen} closePopup={handlePopupClose}/>
      <div className="bg-slate-700">
        <Navbar openPopup={handlePopupOpen}/>
        <div
          className="fixed w-full h-full blur-3xl z-0 brightness-80 "
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <Routes>
          <Route path="/allMovies" element={<AllMovies />}/>
          <Route path="/" element={<Home />}/>
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
