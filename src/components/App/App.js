import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SignInModal from "../SignInModal/SignInModal";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <About />
      <Footer />
      <SignInModal />
    </div>
  );
}

export default App;
