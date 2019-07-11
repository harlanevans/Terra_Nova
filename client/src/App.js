import React from 'react';
import { Switch, Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/shared/Navbar';
import NoMatch from './Components/shared/NoMatch';
import Home from './Components/shared/Landing_Page/Home';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import FetchUser from './Components/auth/FetchUser';
import ProtectRoute from './Components/auth/ProtectedRoute';
import ReservationShow from './Components/reservations/ReservationShow';
import Rooms from './Components/reservations/Rooms';
import MakeReservation from './Components/reservations/MakeReservation';
import Confirmation from './Components/reservations/Confirmation';
import AboutUs from './Components/shared/Landing_Page/About_Us';
import Gallery from './Components/shared/Landing_Page/Gallery';
import Under_Construction from './Components/shared/Landing_Page/Under_Construction';


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
