import React from 'react';
import './App.css';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken';
import Courses from './pages/Course/Courses';
import Course from './pages/Course/Course';
import CourseUnit from './pages/Course/CourseUnit';
import Module from './pages/Module/Module';
import Nav from './pages/Navigation/Nav';
import Logout from './pages/Logout';

function App() {
  const { token, setToken } = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <div className="header">Hundeschule Graz-Mariatrost</div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="courseUnit/:id" element={<CourseUnit />} />
          <Route path="module/:id" element={<Module />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
