import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

// Note: <Switch> statements from react-router-dom are now <Routes> statements in ES-6.
//        the component={} elements is also changed to element={<>} in ES-6.

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/signin' element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
