import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Home from './components/shared/Landing_Page/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectRoute from './components/auth/ProtectedRoute';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
<<<<<<< HEAD
      {/* <Container> */}
=======
>>>>>>> f7aa0e917ce70b7d339528cb528df1df81d5acc2
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
<<<<<<< HEAD
      {/* </Container> */}
=======
>>>>>>> f7aa0e917ce70b7d339528cb528df1df81d5acc2
    </FetchUser>
  </>
)

export default App;
