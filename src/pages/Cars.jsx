import React from "react"
import { Title, List } from '../components/styled'
import '../index.css';
import { useState } from "react";
import CarList from '../components/CarList/CarList'
import Loader from "../components/Loader/Loader";

const Cars = ({ name }) => {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);


    const handleMoreLoad = () => {
        setCurrentPage(prev => prev + 1)
    }

    return (
        <div className="Container" >
            {isLoading && <Loader />}
            <Title>{name}</Title>
            <CarList/>
            </div>     
    )

}

export default Cars