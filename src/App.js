import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './Styles/App.scss'
import { Routes, Route, useParams, useRouteMatch } from 'react-router-dom';
import Product from "./pages/Product";
import Course from "./pages/Course";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Home from "./pages/Home";
import AllComments from "./pages/AllComments";
import { useDispatch, useSelector } from 'react-redux'
import { getEvents, getEventsId, useMatch } from "./api/events";

import DetailedEvents from "./components/NewsConteiner/DetailedEvents";
import { getAdress, getLinkSocialNetwork } from "./api/contacts";
import { setIdEvents } from "./redux/eventsSlice";
import useWindowDimensions from "./pages/with";



function App() {
  const dispatch = useDispatch()
  const { allEvents, status, error, idEventsState } = useSelector(state => state.events)
  //Кастомный Хук для определение ширины экрана
  const { height, width } = useWindowDimensions();





  useEffect(() => {
    dispatch(getEvents())
    dispatch(getAdress())

    dispatch(getLinkSocialNetwork())

  }, [dispatch, window.location.pathname])




  // const screenWidth = window.screen.width

  return (
    <div className={width > 2000 && 'container'} >
      <Navbar />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products_services' element={<Product />} />
        <Route path='/course' element={<Course />} />
        <Route path='/comments' element={<AllComments />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/evntsDetailed/:id' element={<DetailedEvents />} />

      </Routes>


    </div>
  );
}

export default App;
