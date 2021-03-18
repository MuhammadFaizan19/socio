import React from 'react';
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.css';
import Landing from './Components/Landing/Landing';

import Navbar from './Layout/Navbar/Navbar'
import Signup from './Containers/Forms/Signup';
import Login from './Containers/Forms/Login';
import Contact from './Containers/Forms/Contact';
import Feed from './Containers/Feed/Feed';
import Profile from './Containers/Profile/Profile';
import Notifications from './Containers/Notifications/Notifications';
import Search from './Containers/Search/Search';

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
