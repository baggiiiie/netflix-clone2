import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { auth, onAuthStateChanged } from './firebase';
import LoginScreen from './LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Logged in 
        console.log(user)
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
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
