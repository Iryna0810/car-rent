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


const useLocalStorage = (key, defaultValue) => {
  const parseCars = JSON.parse(window.localStorage.getItem(key));
  const [state, setState] = useState(() => {
    if (!parseCars) { return defaultValue }
    if (parseCars.length > 0 ) { return parseCars }
    else return defaultValue;
  });
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}


function App() {
  const [cars, setCars] = useLocalStorage("carsLocalStorage", []);


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
