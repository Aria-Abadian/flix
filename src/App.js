import "./App.css";

import bg from './assets/bg.svg'
import Navbar from "./components/Navbar";

import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div
        className="absolute w-full h-[69.8vw] z-0 blur-3xl brightness-80 "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% auto",
        }}
      >
      </div>
      <Home />
    </div>
  );
}

export default App;
