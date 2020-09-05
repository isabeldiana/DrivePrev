import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function Routes(){
  return (
    <BrowserRouter>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastrar" component={SignUp} />
    </BrowserRouter>
  );
}
