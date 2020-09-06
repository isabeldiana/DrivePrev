import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';

export default function Routes(){
  return (
    <BrowserRouter>
        <Route path="/login" exact component={SignIn} />
        <Route path="/cadastrar" component={SignUp} />
        <Route path="/" component={LandingPage} />
    </BrowserRouter>
  );
}
