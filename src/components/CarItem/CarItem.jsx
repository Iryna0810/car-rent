// import { useState } from "react";

// export const CarItem = ({ car }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal)
//   }


//   const { id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage } = car;

//   return (
//     <>
//       {showModal && (<Modal onCloseModal={toggleModal}>
//         <img src={img} alt=""></img>
//       </Modal>)}

//       <LiStyled key={id} className="ImageGalleryItem" onClick={toggleModal}>
//                     {/* <TiHeartFullOutline color='blue'/> */}
//                     <AiOutlineHeart data-id={id} fill='white' style={{
//                         width: '18',
//                         height: '18',
//                         position: 'absolute',
//                         top: '14',
//                         right: '14',
//                         cursor: 'pointer',
//                     }}
//                         onClick={(e) => handleFavoriteCarList(e)}
//                     />
//                     <Item src={img} alt='car {id}' ></Item>
//                     <CardContainer>
//                     <p>{make} <Span>{model}</Span>, {year}</p>
//                     <p>{rentalPrice }</p>
//                     </CardContainer>

//                     <AdressCardContainer>
//                     <p style={{ padding: '3px'}}>{address.split(',')[1]}</p>
//                     <Text>{address.split(',')[2]}</Text>
//                     <Text>{rentalCompany}</Text>
//                     <Text>{type}</Text>
//                     <Text>{model}</Text>
//                     <Text>{mileage}</Text>
//                     <Text>{accessories[0].split(' ')[0] } {accessories[0].split(' ')[1]}</Text>
//                     </AdressCardContainer>
//                     <Button type='button'>Learn more</Button>
//         </LiStyled>
           
//     </>
//   )
// }
