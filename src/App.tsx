import React from 'react';
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.css';
import Landing from './Components/Landing/Landing';

import Navbar from './Components/Navbar/Navbar'
import Signup from './Components/Forms/Signup';
import Login from './Components/Forms/Login';
import Contact from './Components/Forms/Contact';

interface AppProps {
  isLoggedIn: boolean
}

const App: React.FC<AppProps> = ({ isLoggedIn }) => {
  return (
    <div className={classes.Container} >
      <Navbar isLoggedIn={false} />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/login' exact component={Login} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </div >


  );
}

export default App;
