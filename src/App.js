import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
