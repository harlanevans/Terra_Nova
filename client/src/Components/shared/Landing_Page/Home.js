import React from 'react';
import Carousel from './Carousel';
import Rooms_Home from './Rooms_Home';
import About_Us from './About_Us';
import Review_Carousel from './Review_Carousel';
import Our_Events from './Our_Events';
import News from './News';
import Gallery from './Gallery';
import Footer from './Footer';

const Home = () => (
  <>
  <div id="home"></div>
  <Carousel />
  <div id="room_rate"></div>
  <Rooms_Home/>
  <div id="about"></div>
  <About_Us/>
  <Review_Carousel/>
  <Our_Events/>
  <News/>
  <div id="gallery"></div>
  <Gallery/>
  <Footer/>
  </>
)

export default Home;
