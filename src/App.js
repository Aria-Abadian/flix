import "./App.css";

import bg from './assets/bg.svg'
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import bluprint from "./assets/original-34f1922d567a10de39810852528dcc3d.jpg";

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
        {/* <img className=" h-full" src={bg} /> */}
      </div>
      <Home />
    </div>
  );
}

export default App;
