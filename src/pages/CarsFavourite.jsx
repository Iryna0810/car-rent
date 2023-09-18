import React from "react"
import { Title } from '../components/styled'
import '../index.css';
import { useEffect, useState } from "react";
import {getAllCars} from '../components/CarList/services';
import { AiOutlineHeart } from 'react-icons/ai'
import { CarItem } from "../components/CarItem/CarItem";
import { LiStyled, Text, ListStyled, Item, Button, CardContainer, Span, AdressCardContainer } from '../components/styled';

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



const CarsFavourite = ({ name }) => {   
    // const [favoriteCars, setFavoriteCar] = useState([]);

        const [carsAllFavorite, setCarsAllFavorite] = useLocalStorage("carsListLocalStorage", []);

    useEffect(() => {
        const parseCars = JSON.parse(window.localStorage.getItem('carsListLocalStorage'));
        console.log(parseCars);  
    })

    const handleFavoriteCarList = (e) => {
        let carId = Number(
    e.target.getAttribute('data-id')
        );
        console.log(carId);

        if (carId) {
            // const searchCar = cars.find(car => Number(car.id) === carId);
            // console.log(searchCar);
            // const isFavoriteId = carsAllFavorite.find(car => Number(car.id) === carId);
            // console.log(isFavoriteId);
            // !isFavoriteId
            //     ? setCarsAllFavorite(carList => [...carList, searchCar])
            setCarsAllFavorite((carList) => carsAllFavorite.filter(car => Number(car.id) !== carId))
        
            console.log(e.target.getAttribute('fill'))
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