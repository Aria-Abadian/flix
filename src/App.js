import "./App.css";

import bg from './assets/bg.svg'
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div
        className="absolute w-full h-[130vw] blur-3xl z-0 brightness-80 "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% auto",
        }}
      >
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
