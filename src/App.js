import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './Styles/App.scss'
import { Routes, Route } from 'react-router-dom';
import Product from "./pages/Product";
import Cours from "./pages/cours";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Home from "./pages/Home";
import { getEvents } from "./api/events";
import { useDispatch } from 'react-redux';
import DetailedEvents from "./components/NewsConteiner/DetailedEvents";
import { getAdress } from "./api/contacts";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvents())
    dispatch(getAdress())
  }, [dispatch])

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
        <Route path='/evntsDetailed' element={<DetailedEvents />} />

      </Routes>


    </div>
  );
}

export default App;
