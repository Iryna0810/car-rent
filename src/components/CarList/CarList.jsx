import cars from '../advertsCars.json'
// import clsx from 'clsx';
// import { List } from '../styled';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { LiStyled, ListStyled, Item, Button, CardContainer, Span, AdressCardContainer } from '../styled';
import '../../index.css'; 


const CarList = () => {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={2}>
        <ListStyled>
            {cars.map(({id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => (
            <LiStyled key={id} className="ImageGalleryItem">
                    <Item src={img} alt='car {id}' ></Item>
                    <CardContainer>
                    <p>{make} <Span>{model}</Span>, {year}</p>
                    <p>{rentalPrice }</p>
                    </CardContainer>
                    <AdressCardContainer>
                    <p>{address}</p>
                    <p>{rentalCompany}</p>
                    <p>{type}</p>
                    <p>{model}</p>
                    <p>{mileage}</p>
                    <p>{accessories[0] }</p>
                    </AdressCardContainer>


                    <Button type='button'>Learn more</Button>
        </LiStyled>
            ))
            }
        </ListStyled>
    )
}

export default CarList