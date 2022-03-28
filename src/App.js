import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from './Component/Home';
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import List from "./Component/List";
import Footer from "./Component/Footer";
import './Css/About.css'

const App=()=>{
  return(
    <>
    <List/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;