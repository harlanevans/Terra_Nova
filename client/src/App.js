import React from 'react';
import { Switch, Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Home from './components/shared/Landing_Page/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectRoute from './components/auth/ProtectedRoute';
import ReservationShow from './components/reservations/ReservationShow';
import Rooms from './components/reservations/Rooms';
import MakeReservation from './components/reservations/MakeReservation';
import Confirmation from './components/reservations/Confirmation';
import AboutUs from './components/shared/Landing_Page/About_Us';
import Gallery from './components/shared/Landing_Page/Gallery';
import Under_Construction from './components/shared/Landing_Page/Under_Construction';
import Contact from './components/shared/Landing_Page/Contact';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      {/* <Container> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/reservation' component={ReservationShow} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/makereservation/:id' component={MakeReservation} />
          <Route exact path='/confirmation' component={Confirmation} />
          <Route exact path='/contact' component={Contact} />
{/* routes for sttis psages with footer */}
          <Route exact path='/Under_Construction' component={Under_Construction} />
          <Route exact path='/About_Us' component={AboutUs} />
          <Route exact path='/Gallery' component={Gallery} />
          <Route component={NoMatch} />
        </Switch>
      {/* </Container> */}
    </FetchUser>
  </>
)

export default App;
