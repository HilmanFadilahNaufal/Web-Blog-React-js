// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';
import Edit from './EditForm';

function App() {
   
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="Content">
        <Routes>
        <Route exact path="/"  element={<Home />} />

        <Route path="/create" element={<Create />} />

        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route path="/edit/:id" element={<Edit/>} />

        <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App;
