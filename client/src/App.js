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
          <Route exact path='/makereservation' component={MakeReservation} />
          <Route exact path='/confirmation' component={Confirmation} />
        </Switch>
      {/* </Container> */}
    </FetchUser>
  </>
)

export default App;
