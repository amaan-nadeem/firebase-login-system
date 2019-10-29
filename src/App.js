import React from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedNormalLoginForm from './components/auth/login';
import SignUpForm from './components/auth/signIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoggedIn from './components/screens/LoggedIn';
import Navbar from './components/screens/navbar';
import Home from './components/screens/Home';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/home' component ={Home} />
          <Route path='/' exact component={ WrappedNormalLoginForm } />
          <Route path='/signup' exact component={ SignUpForm } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
