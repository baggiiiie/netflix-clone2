import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
       <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<HomeScreen/>} />

          {/* <Route path="/" >
            <HomeScreen />
          </Route> */}
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
