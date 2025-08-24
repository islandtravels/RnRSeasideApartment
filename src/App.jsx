import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./css/index.css";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import { galleryImgList } from "./constants";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Gallery imgList={galleryImgList} />
      <Footer />
    </>
  );
}

export default App;
