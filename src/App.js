import "./App.css";

import bg from "./assets/bg.svg";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AllMovies from "./pages/allMovies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div
        className="fixed w-full h-full blur-3xl z-0 brightness-80 "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
      </div>
      {/* <Home /> */}
      <AllMovies />
      <Footer />
    </div>
  );
}

export default App;
