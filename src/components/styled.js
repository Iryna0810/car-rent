import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 29px;
  width: 100%;
  height: 100%;
  font: normal normal bold 30px comic sans ms;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Title = styled.h2`
color: #fff;
font-size: 50px;
`

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  font-family: Manrope;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: silver;
  }

  &.active {
    color: black;
    background-color: silver;
  }`

  export const LinkPage = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  font: normal normal bold 20px comic sans ms;
  background-color: #3f51b5;

  &.active {
    color: white;
    background-color: silver;
  }`


export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto;
  padding: 10px;
  gap: 20px;
`;

export const ContainerModal = styled.div`
display: flex;
flex-direction: column;
overflow: auto;
width: 541px;
height: auto;
padding: 40px;

`

export const Header = styled.header`
  top: 0;
  left: 0;
  position: relative;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  margin: 20px;
  background-color: inherit;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Button = styled.button`
    display: block;
    // position: absolute;
    margin-bottom: 0;
    margin-top: auto;
    width: 100%;
    height: 44px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 99px 12px 99px;
    margin: 0 auto;
    // margin-top: 28px;
    border: 1px #3470FF;
    border-radius: 12px;
    background: #3470FF;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
      &:hover {
    background: #0B44CD;
  }
    `;

export const StyledInput = styled.input`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  outline: none;
  background-color: #d4bfd3;
  color: #50174c;
  border: 1px solid #d4bfd3;
  height: 50px;
  width: auto;
  border-radius: 4px;
  padding: 0 20px;
  transition: 300ms;
  cursor: pointer;
  ::placeholder {
    color:#50174c;
  }
`;

export const CardContainer = styled.div`
display: flex;
justify-content: space-between;
font-size: 16px;
color: #121417;
font-weight: 600;
line-height: 20px;
margin-top: 14px;
padding: 5px;
`

export const Span = styled.span`
color: #3470FF;
`

export const AdressCardContainer = styled.div`
display: flex;;
// grid-template-columns: 1fr 1fr 1fr 1fr; 
// gap: 8px;
flex-flow: wrap;
color: #121417;
font-size: 12px;
font-weight: 400;
line-height: 18px;
margin-top: 8px;
// padding: 2px;
margin-bottom: 28px;
// overflow: hidden;
`
export const Text = styled.p`
border-left: 1px solid rgba(18, 20, 23, 0.5);
padding: 6px;
`
export const TextModal = styled.p`
display: block;
background-color: #F9F9F9;
padding: 7px 14px 7px 14px;
border-radius: 35px;
`

export const ListStyled = styled.ul`
  display: flex;
  max-width: calc(100vw - 87px);
  flex-wrap: wrap;
        min-height: 426px;
        width: 100%;

//   grid-template-columns: repeat(auto-fill, minmax(274px, fr));
  gap: 29px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  list-style-type: none;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
    `
export const LiStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  // justyfy-content: flex-end;
  min-width: 274px;
  width: calc((100% - 87px) / 4);
  height: auto;
  background-color: #F3F3F2;
  border-radius: 12px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const Container = styled.div`
     display: block;
     justify-content: center;
     width: auto;
     margin: 0 auto;
     background-color: #0f0f0f;

`

export const Item = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  height: 354px;
  object-fit: cover;
`

export const ContainerHome = styled.div`
     display: block;
     justify-content: center;
     gap: 8px;
     margin: 0 auto;
     padding: 10px;
`
export const RentalButton = styled.button`
display: block;
    width: 168px;
    height: 44px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 50px;
    margin-right: auto;
    border: 1px #3470FF;
    border-radius: 12px;
    background: #3470FF;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
      &:hover {
    background: #0B44CD;
`
