import { Vortex } from 'react-loader-spinner';
import {CarItem} from '../CarItem/CarItem'
import { useState, useEffect } from 'react';
import {getAllCars} from './services';
import { ListStyled} from '../styled';
import '../../index.css'; 

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

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [carsAllFavorite, setCarsAllFavorite] = useLocalStorage("carsListLocalStorage", []);
    const [currentPage, setCurrentPage] = useState(1);

    const handleMoreLoad = () => {
        setCurrentPage(prev => prev + 1)
    }
    
    useEffect(() => {
        if (!cars) return setCurrentPage(1);
        setIsLoading(true);
        getAllCars(currentPage).then(({ data }) => {
            if (data.length === 0) return setCurrentPage(1);
            setCars(data);
        })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    const handleFavoriteCarList = (e) => {
        let carId = Number(
            e.target.getAttribute('data-id')
        );
        console.log(carId);

        if (carId) {
            const searchCar = cars.find(car => Number(car.id) === carId);
            console.log(searchCar);
            const isFavoriteId = carsAllFavorite.find(car => Number(car.id) === carId);
            console.log(isFavoriteId);
            !isFavoriteId
                ? setCarsAllFavorite(carList => [...carList, searchCar])
                : setCarsAllFavorite((carList) => carsAllFavorite.filter(car => Number(car.id) !== carId))
        
            console.log(e.target.getAttribute('fill'))
            e.target.getAttribute('fill') === 'white' ? e.target.setAttribute('fill', 'blue') : e.target.setAttribute('fill', 'white')
        }
        else return;
    }

    return (
        <ListStyled>
             {isLoading && <Vortex
                    visible={true}
                    height="280"
                    width="280"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />}
                
            {error && <div>Something went wrong. Try again later</div>}
            {cars && cars.map((car) => <CarItem key={car.id} car={car} handleFavoriteCarList={handleFavoriteCarList} />)}
            {cars.length > 0 && <button style={{color: "#3470FF", borderRadius: '12px', width: '180px', height: '70px' }} onClick={handleMoreLoad}>Load More</button>}
        
        </ListStyled>)
    
    
};

export default CarList