import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <About />
      <Footer />
      <LoginModal />
      {/* <RegisterModal /> */}
    </div>
  );
}

export default App;
