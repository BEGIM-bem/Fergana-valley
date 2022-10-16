import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './Styles/App.scss'
import { Routes, Route } from 'react-router-dom';
import Product from "./pages/Product";
import Cours from "./pages/cours";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import About from "./pages/About";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products_services' element={<Product />} />
        <Route path='/cours' element={<Cours />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contacts' element={<Contacts />} />

      </Routes>


    </div>
  );
}

export default App;
