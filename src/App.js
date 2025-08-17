import "./App.css";
import { useState } from "react";

import Header from "./modules/Header.js";
import PokerBoard from "./modules/PokerBoard.js";
import Footer from "./modules/Footer.js";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen p-4 min-h-screen flex flex-col">
        <Header />
        <PokerBoard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
