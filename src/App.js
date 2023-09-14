import React from 'react';
import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router-dom";
import Cars from './pages/Cars';
import Home from './pages/Home';
import CarsFavourite from './pages/CarsFavourite';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

function App() {
  return (
    <div>
      <nav>
        <ul>
           <li>
        <StyledLink to='/'>Home</StyledLink>
          </li>
          <li>
        <StyledLink to='/Cars'>Cars</StyledLink>
          </li>
          <li>
        <StyledLink to='/CarsFavourite'>CarsFavourite</StyledLink>
          </li>
        </ul>

      </nav>
      <Routes>
        <Route path="/" element={<Home name='This is Home page' />}/>
              <Route path="/Cars" element={<Cars name='This is Cars page'/>} />
        <Route path="/CarsFavourite" element={ <CarsFavourite name='This is CarsFavourite page'/>} />
      </Routes>

      </div>
  );
}

export default App;
