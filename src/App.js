import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Auth, onAuthStateChanged } from 'firebase/auth';
import LoginScreen from './LoginScreen';
import { useDispatch } from 'react-redux';
import { logout } from './features/counter/userSlice';

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in 
        console.log(userAuth)
      } else {
        // Logged out
        dispatch(logout)
      }
    })

    return unsubscribe;
  }, []);

  return (
    <div className="app">
       <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {/* <Route exact path='/' element={<HomeScreen/>} /> */}
          <Route path='/' element={
            !user ? <LoginScreen /> : <HomeScreen />
          } />
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
          </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
