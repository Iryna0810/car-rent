import cars from '../advertsCars.json'
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import { FavoriteBorder } from '@mui/icons-material';
import {AiOutlineHeart} from 'react-icons/ai'
import { LiStyled, ListStyled, Item, Button, CardContainer, Span, AdressCardContainer } from '../styled';
import '../../index.css'; 
import { SvgIcon } from '@mui/material';


const CarList = () => {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={2}>
        <ListStyled>
            {cars.map(({id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => (
                <LiStyled key={id} className="ImageGalleryItem">
                    <AiOutlineHeart style={{
                        width: '18',
                        height: '18',
                        position: 'absolute',
                        top: '14',
                        right: '14',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onClick={()=> {console.log('This is heart!!!')
                    }}
                    />
                    <Item src={img} alt='car {id}' ></Item>
                    <CardContainer>
                    <p>{make} <Span>{model}</Span>, {year}</p>
                    <p>{rentalPrice }</p>
                    </CardContainer>

                    <AdressCardContainer>
                        <p>{address.split(',')[1]}</p>
                        <p>{address.split(',')[2]}</p>
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