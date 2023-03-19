import React from "react";
import './App.css';
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import Loginsignup from'./pages/Loginsignup';

function App() {
  return (
    <>
    <Navigation/>
    <Loginsignup/>
    <Footer/>
    </>
  );
}

export default App;
