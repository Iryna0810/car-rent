import { useState } from "react";
import { AiOutlineHeart } from 'react-icons/ai'
import { LiStyled, Text, TextModal, Item, Button, CardContainer, Span, AdressCardContainer } from '../styled';
import { Modal } from '../Modal/Modal';


export const CarItem = ({ car, handleFavoriteCarList }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const { id, year, make, model, type, img, description, accessories, rentalPrice, rentalCompany, address, rentalConditions, mileage } = car;

  return (
    <>
      {showModal && (<Modal onCloseModal={toggleModal}>
        <Item src={img} alt='car {id}' ></Item>
                    <CardContainer>
                    <p>{make} <Span>{model}</Span>, {year}</p>
                    </CardContainer>

                    <AdressCardContainer>
                    <p style={{ padding: '3px'}}>{address.split(',')[1]}</p>
                    <Text>{address.split(',')[2]}</Text>
                    <Text>{rentalCompany}</Text>
                    <Text>{type}</Text>
                    <Text>{model}</Text>
                    <Text>{mileage}</Text>
                    <Text>{accessories[0].split(' ')[0] } {accessories[0].split(' ')[1]}</Text>
              </AdressCardContainer>
              
              <p style={{fontSize: '12px', color: '#121417', fontWeight: 400, lineHeight: '18px'}}>{description}</p>
              <h3 style={{marginTop: '24px', fontSize: '14px', color: '#121417', fontWeight: 500, lineHeight: '20px'}}>Accessories and functionalities:</h3>
              <AdressCardContainer>
                  {accessories}
              </AdressCardContainer>
              <h3 style={{fontSize: '14px', color: '#121417', fontWeight: 500, lineHeight: '20px'}}>Rental Conditions: </h3>
              <AdressCardContainer style={{fontSize: '12px', color: '#121417', fontWeight: 600, lineHeight: '18px'}}>
                  <TextModal>{rentalConditions}</TextModal> <br/>
                  <TextModal>Mileage: <span style={{color: 'blue'}}> {mileage}</span></TextModal>
                  <TextModal>Price: <span style={{color: 'blue'}}>{ rentalPrice}</span></TextModal>

              </AdressCardContainer>
              <Button style={{width: "168px", height: '44px' }}>Rental car</Button>

      </Modal>)}

      <LiStyled key={id} className="ImageGalleryItem" >
                    {/* <TiHeartFullOutline color='blue'/> */}
                    <AiOutlineHeart data-id={id} fill='white' style={{
                        width: '18',
                        height: '18',
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
                    <p style={{ padding: '3px'}}>{address.split(',')[1]}</p>
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
