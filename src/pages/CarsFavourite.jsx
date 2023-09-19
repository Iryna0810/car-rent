import React from "react"
import '../index.css';
import { useEffect, useState } from "react";
import { CarItem } from "../components/CarItem/CarItem";
import { ListStyled } from '../components/styled';

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



const CarsFavourite = () => {   
    const [carsAllFavorite, setCarsAllFavorite] = useLocalStorage("carsListLocalStorage", []);

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const parseCars = JSON.parse(window.localStorage.getItem('carsListLocalStorage'));
        // console.log(parseCars);  
    })

    const handleFavoriteCarList = (e) => {
        let carId = Number(
    e.target.getAttribute('data-id')
        );
        // console.log(carId);

        if (carId) {
            setCarsAllFavorite(() => carsAllFavorite.filter(car => Number(car.id) !== carId))
        
            // console.log(e.target.getAttribute('fill'))
            e.target.getAttribute('fill') === 'white' ? e.target.setAttribute('fill', 'blue') : e.target.setAttribute('fill', 'white')
        }
        else return;
    }


    return (
        <ListStyled>
            {carsAllFavorite.map((car) => <CarItem key={car.id} car={car} handleFavoriteCarList={handleFavoriteCarList} />)}
        </ListStyled>
    )

}

export default CarsFavourite