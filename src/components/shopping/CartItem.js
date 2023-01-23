import {useContext} from "react"
import {ProductsContext} from "../../context/ProductsProvider"
import styled from 'styled-components'
import { Link } from "react-router-dom"


const CartItem = ({item}) => {

  const {delFromCart, addToCart } = useContext(ProductsContext)

    const imagenes = require.context("../../assets/images", true);
    const {id, nombre, precio, quantity, tipo, image} = item


    return (
        <ItemCarrito>
            
              <Image>
                  <img src={imagenes(`./${image}`)} alt={tipo} height="110px" width="auto"/>
              </Image>
              <Text>
                  <Nombre><Text>{nombre} </Text></Nombre>
                  <Tipo><Text>{tipo} 750ml</Text></Tipo>
              </Text>
              <Precio>
                  <div>${`${precio} x ${quantity}`}</div>
                  <div> Total ${`${precio*quantity}`}</div>
              </Precio>
              <CounterContainer>
                  <ButtonContainer>
                      <ButtonMenos onClick={()=>delFromCart(id)}>-</ButtonMenos>
                      <ButtonMas onClick={()=>addToCart(id)}>+</ButtonMas>
                  </ButtonContainer>
                  <Link to="/carro" className="modCart">
                      <ButtonClear onClick={(all)=>delFromCart(id, all)}>
                          Eliminar Todos
                      </ButtonClear>
                  </Link>
              </CounterContainer>

        </ItemCarrito>
    )
}

export default CartItem

const ItemCarrito = styled.div`
  width: 53vw;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid grey;
  margin-bottom: 0.1rem;
  padding: 3%;
  position: relative;
  bottom: 35px;
  padding-right: 10%;

  @media screen and (max-width: 768px){
    height: 70vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
}

  `

 const Image = styled.div`
  width: 25%;
  height: 25%;
  
  @media screen and (max-width: 768px){
   padding-right: 30%;
   
}

  @media screen and (max-width: 576px){
   padding-right: 40%;
}
 `

const Text = styled.p`
    height: 25%;
    width: 100%;
    text-align: center;
    color: var(--dark65);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px){
    height: 20%;
}
`

  const Nombre = styled.h3`
  padding-top: 25px;
  color: var(--dark);
  font-family: 'Carter One', cursive;
  font-size: 21px;

  @media screen and (max-width: 768px){
    padding-top: 40px;
  }
  `

  const Tipo = styled.p`
  color: var(--dark);
  font-family:'Satisfy', cursive;
  font-size: 18px;
  font-weight: 200;

  `

  const Precio = styled.p`
  font-family:'EB Garamond', serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  top: 2px;
  color: var(--dark65);

  @media screen and (max-width: 576px){
    padding-right: 2%;
  }

  div {
  position: relative;
  width: 150px;
  font-weight: 600;
  }


  `
const CounterContainer = styled.div`
  height: 20%; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3px;
  padding-top: 15px;
  div {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 768px){
   padding-right: 15%;
  }

  @media screen and (max-width: 576px){
   padding-right: 20%;
  }
`
const ButtonContainer = styled.div`
    position: relative;
    bottom: 10px;
    left: 45px;
    display: flex; 


`
const ButtonMenos = styled.button`
    background: var(--dark10);
    color: var(--dark80);
    font-size: 2rem;
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 0.5rem;
    border: solid 1px  var(--dark80) ;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    text-align: center;
    position: relative;
    top: 15px;
    
    @media screen and (max-width: 1024px){
    &:active {
    background-color: var(--dark35) !important;
    color: var(--beige);
    box-shadow: none;
    transform: translateY(4px);
    transition: 0.15s;
    }
  }
`

const ButtonMas = styled.button`
    background: var(--dark10);
    color: var(--dark80);
    font-size: 2rem;
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 0.5rem;
    border: solid 1px  var(--dark80) ;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    text-align: center;
    position: relative;
    top: 15px;
    left: 10px;
    
   
    &:active {
    background-color: var(--dark35) !important;
    color: var(--beige);
    box-shadow: none;
    transform: translateY(4px);
    transition: 0.15s;
    
  }
`

const ButtonClear = styled.div`
    color:white;
    background-color: var(--orange);
    padding: 5px 10px;
    position: relative;
    top: 15px;
    left: 30px;
    border-radius: 0.5rem;
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
    width:115px;
    height: 28px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);

  
  &:active {
    background-color: var(--orange) !important;
    color: var(--beige);
    box-shadow: none;
    transform: translateY(4px);
    transition: 0.15s;
    
  }
`






