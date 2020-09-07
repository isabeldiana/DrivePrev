import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import MedicalRecord from './pages/MedicalRecord';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={SignIn} />
      <Route path="/cadastrar" component={SignUp} />
      <Route path="/medicalrecord" component={MedicalRecord} />
    </BrowserRouter>
  );
}
