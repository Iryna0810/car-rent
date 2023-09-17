import React from 'react';
// import styled from "styled-components";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Cars from './pages/Cars';
import Home from './pages/Home';
import CarsFavourite from './pages/CarsFavourite';
import SharedLayout from './components/SharedLayout/SharedLayout';
import './index.css';
import './font/font.css'





function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route path="/" index element={<Home name='This is Home page' />}/>
              <Route path="/catalog" element={<Cars name='This is Cars page'/>} />
        <Route path="/favorites" element={ <CarsFavourite name='This is CarsFavourite page'/>} />
      </Route>
      </Routes>
  );
}

export default App;
