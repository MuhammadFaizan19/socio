import React from 'react';
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.css';
import Landing from './Components/Landing/Landing';

import Navbar from './Components/Navbar/Navbar'
import Signup from './Components/Forms/Signup';
import Login from './Components/Forms/Login';
import Contact from './Components/Forms/Contact';
import Feed from './Components/Feed/Feed';
import Profile from './Components/Profile/Profile';
import Notifications from './Components/Notifications/Notifications';
import Search from './Components/Search/Search';

interface AppProps {
  isLoggedIn: boolean
}

const App: React.FC<AppProps> = ({ isLoggedIn }) => {
  const a = true;
  return (
    <div className={classes.Container} >
      <Navbar isLoggedIn={a} />
      <div className={classes.Inner} >
        {!a &&
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/login' exact component={Login} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        }
        {a &&
          <Switch>
            <Route path='/feed' exact component={Feed} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/notifications' exact component={Notifications} />
            <Route path='/search' exact component={Search} />
          </Switch>
        }
      </div>
    </div >

  );
}

export default App;
