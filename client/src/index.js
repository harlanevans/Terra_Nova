import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';

<<<<<<< HEAD
ReactDOM.render(
<App />, 
document.getElementById('root'));
=======
initMiddleware();
>>>>>>> fea209339ea722e3e29c6d7344d1574b2d8bd1dd

ReactDOM.render(
    <AuthProvider>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </AuthProvider>    
  , document.getElementById('root')
);
