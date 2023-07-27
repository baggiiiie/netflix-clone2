import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { auth} from './firebase';
import LoginScreen from './LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Logged in 
        console.log(user)
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      } else {
        // Logged out
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {/* <Router>
        <Routes>
          {(!user) ? (
            <Route path='/' element={<LoginScreen />} />
          ) : (
            <>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
            </>
            )}
        </Routes>
      </Router> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/' element={
              <HomeScreen />} />
            <Route path="/profile" element={
              <ProfileScreen />
            }>
            </Route>
            <Route path="/users">
            </Route>
          </Routes>)}
      </Router>
    </div>
  );
}

export default App;
