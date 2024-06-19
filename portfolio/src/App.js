import logo from "./logo.svg";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./Components/Error404/Error404";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Photosandphotostory from "./Components/Photosandphotostory/Photosandphotostory";
import Photostory from "./Components/Photostory/Photostory";
import MyLogos from "./Components/MyLogos/MyLogos"
import "./App.css";
import Contact from "./Components/Contact/Contact";
import AllPhotos from "./Components/AllPhotos/AllPhotos";
import Design from "./Components/Design/Design";

function App() {
  useEffect(() => {
    fetch("/data")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
      });
  });
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="allphotos" element={<AllPhotos />} />
        <Route path="photosandphotostory" element={<Photosandphotostory />} />
        <Route path="photostory" element={<Photostory />} />
        <Route path="design" element={<Design />} />
        <Route path="mylogos" element={<MyLogos />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
