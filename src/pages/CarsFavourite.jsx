import React from "react"
import { Title } from '../components/styled'
import '../index.css';

const CarsFavourite = ({name}) => {
    return (
    <div className="Container" >
            <Title>{name }</Title>
            </div>     
    )

}

export default CarsFavourite