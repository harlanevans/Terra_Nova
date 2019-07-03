import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Home from './components/shared/Landing_Page/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectRoute from './components/auth/ProtectedRoute';
import ReservationShow from './components/reservations/ReservationShow';


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
          <Route component={NoMatch} />
        </Switch>
      {/* </Container> */}
    </FetchUser>
  </>
)

export default App;
