import { useState } from "react";
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
// import {TiHeartFullOutline} from "react-icons/ti"
import { LiStyled, Text, TextModal, RentalButton, Item,ContainerModal, Button, CardContainer, Span, AdressCardContainer } from '../styled';
import { Modal } from '../Modal/Modal';


export const CarItem = ({ car, handleFavoriteCarList }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const { id, year, make, model, type, img, fuelConsumption, engineSize, description, accessories, rentalPrice, rentalCompany, address, rentalConditions, mileage } = car;
  console.log(car);

  return (
    <>
      {showModal && (<Modal onCloseModal={toggleModal}>
        <ContainerModal>
        <AiOutlineClose onClick={toggleModal} style={{cursor: 'pointer', top: '16px', right: "16px", position: 'absolute', width: '24px', height: '24px'}} />
        <Item src={img} alt='car {model}' ></Item>
                    <CardContainer>
                    <p>{make} <Span>{model}</Span>, {year}</p>
                    </CardContainer>

                    <AdressCardContainer>
                    <p style={{ padding: '3px', alignSelf: 'center'}}>{address.split(',')[1]}</p>
                    <Text>{address.split(',')[2]}</Text>
            <Text>id: {id}</Text>
            <Text>Year: {year}</Text>
            <Text>Type: {type}</Text>
            <Text>Fuel Consumption: {fuelConsumption}</Text>
            <Text>Engine Size: {engineSize }</Text>

              </AdressCardContainer>
              
              <p style={{fontSize: '12px', color: '#121417', fontWeight: 400, lineHeight: '18px'}}>{description}</p>
              <h3 style={{marginTop: '24px', fontSize: '14px', color: '#121417', fontWeight: 500, lineHeight: '20px'}}>Accessories and functionalities:</h3>
              <AdressCardContainer>
                  <p>{accessories[0]}</p>
              </AdressCardContainer>
              <h3 style={{fontSize: '14px', color: '#121417', fontWeight: 500, lineHeight: '20px'}}>Rental Conditions: </h3>
              <AdressCardContainer style={{fontSize: '12px', color: '#121417', fontWeight: 600, lineHeight: '18px'}}>
            <TextModal >Minimum age: <span style={{color: '#3470FF'}}>{rentalConditions.split('\n')[0].trim().split(':')[1]}</span></TextModal>
            <TextModal>{rentalConditions.split('\n')[1]}</TextModal>
            <TextModal>{rentalConditions.split('\n')[2]}</TextModal>
            <TextModal >Mileage: <span style={{color: '#3470FF'}}> {mileage}</span></TextModal>
            <TextModal>Price: <span style={{color: '#3470FF'}}>{ rentalPrice}</span></TextModal>
          </AdressCardContainer>
            <RentalButton onClick={toggleModal}>Rental car</RentalButton>
</ContainerModal>
      </Modal>)}

      <LiStyled key={id} className="ImageGalleryItem" >
                    {/* <TiHeartFullOutline color='blue'/> */}
                    <AiOutlineHeart data-id={id} fill='white' style={{
                        width: '18px',
                        height: '18px',
                        position: 'absolute',
                        top: '14',
                        right: '14',
                        cursor: 'pointer',
                    }}
                        onClick={(e) => handleFavoriteCarList(e)}
                    />
                    <Item src={img} alt='car {id}' ></Item>
                    <CardContainer>
                    <p>{make} <Span>{model}</Span>, {year}</p>
                    <p>{rentalPrice }</p>
                    </CardContainer>

                    <AdressCardContainer>
                    <p style={{ padding: '3px', alignSelf: 'center'}}>{address.split(',')[1]}</p>
                    <Text>{address.split(',')[2]}</Text>
                    <Text>{rentalCompany}</Text>
                    <Text>{type}</Text>
                    <Text>{model}</Text>
                    <Text>{mileage}</Text>
                    <Text>{accessories[0].split(' ')[0] } {accessories[0].split(' ')[1]}</Text>
                    </AdressCardContainer>
                    <Button onClick={toggleModal} type='button'>Learn more</Button>
        </LiStyled>
           
    </>
  )
}
