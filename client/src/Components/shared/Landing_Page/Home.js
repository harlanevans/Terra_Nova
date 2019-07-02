import React from 'react';
import Controlled_Carousel from './Main_Carousel';
import Rooms_Home from './Rooms_Home';
import About_Us from './About_Us';
import Review_Carousel from './Review_Carousel';
import Our_Events from './Our_Events';
import News from './News';
import Gallery from './Gallery';
import Footer from './Footer';
import Calendar from 'react-calendar';
import ReservationForm from '../../reservations/ReservationForm';

const Home = () => (
  <>
  <div id="home"></div>
  <Controlled_Carousel />
  <div id="room_rate"></div>
  <Rooms_Home/>
  <div id="about"></div>
  <About_Us/>
  <Review_Carousel/>
  <Our_Events/>
  <News/>
  <div id="gallery"></div>
  <Gallery/>
  <ReservationForm />
  <Calendar />
  <Footer/>
  </>
)

export default Home;
