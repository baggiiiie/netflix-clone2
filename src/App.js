import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoginScreen from './LoginScreen';

function App() {
  const user = null;

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
