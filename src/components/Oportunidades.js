import React from 'react';
import styled from 'styled-components';
import line from "../assets/images/line.webp"
import {HiOutlineShoppingCart} from 'react-icons/hi';
import promo1 from "../assets/images/promo1.webp"
import promo2 from "../assets/images/promo5.webp"


const Oportunidades = ({product}) => {

  
    return (
        <ConteinerOportunidades>
            <Titulo>
                <div className='titulo'>
                    <div className='lineLeft'>
                        <img src={line} alt="linea" width="100%" />
                    </div>
                    <div className='tituloOportunidades'>
                        <h1>OPORTUNIDADES</h1>
                    </div>
                    <div className='lineRight'>
                        <img src={line} alt="linea" width="100%" />
                    </div>
                </div>
            </Titulo>
            <ContenedorCards>
                <Card>
                    <ImageContainer><img src={promo1} alt="promo" width="220px" height="220px" /></ImageContainer>
                    <Caption>
                        <h3>Promoción 1</h3>
                        <p>C. Piel de Lobo - P. Toso - E. Gascón - Dv Catena - Desquiciado - Elementos</p>
                        <div className='precio'>
                            <div className='precioTachado'>
                                <p>$ 46.700.-</p>
                            </div>
                            <div className='precioOferta'>
                                <p>$38.900-</p>
                            </div>
                        </div>
                        <ButtAddProduct >
                                <HiOutlineShoppingCart style={{fontSize:"20", margin:"0px 8px" }}/> Agregar al Carrito
                        </ButtAddProduct>
                    </Caption>
                </Card>

                <Card>
                    <ImageContainer><img src={promo1} alt="promo" width="220px" height="220px" /></ImageContainer>
                    <Caption>
                        <h3>Promoción 2</h3>
                        <p>Miguel Minni - Cafayate - Vallisto - Mariflor - Trumpeter - Gauchezco</p>
                        <div className='precio'>
                            <div className='precioTachado'>
                                <p>$ 46.700.-</p>
                            </div>
                            <div className='precioOferta'>
                                <p>$33.700-</p>
                            </div>
                        </div>
                        <ButtAddProduct >
                                <HiOutlineShoppingCart style={{fontSize:"20", margin:"0px 8px" }}/> Agregar al Carrito
                        </ButtAddProduct>
                    </Caption>
                </Card>
            </ContenedorCards>
        </ConteinerOportunidades>

    )
}

export default Oportunidades

const ConteinerOportunidades = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const Titulo = styled.div`
width: 100%;
height: 50px;
margin: 2%;
padding: 2%;

    .titulo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    }

    .lineLeft{
    color: var(--dark);
    align-items: center;
    padding-left: 3%;
    padding-right: 2%;
    }

    .lineRight{
    color: var(--dark);
    align-items: center;
    padding-left: 2%;
    padding-right: 3%;
    }

    .tituloOportunidades{
    color: var(--dark);
    font-family: var(--title-font);
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    }
`
const ContenedorCards = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media screen and (min-width: 768px){
    flex-direction: row;
}

@media screen and (min-width: 1200px){
    gap: 80px;
}
`

const Card = styled.div`
height: 45rem;
width: 28rem;
border: 0.15rem solid var(--orange);
box-sizing: border-box;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border-radius: 1rem;
overflow:hidden;
margin: 4rem;
box-shadow: rgba(0, 0, 0, 0.3) 6px 8px 5px;
`

const Caption = styled.figcaption`
position:'relative';
top:'-20px';
width:'100%';
display: 'flex';
flex-direction:'column';
align-items:'center';
font-weight:'bold';
padding-bottom:'0.1rem';
text-align: center;

    h3{
        color: var(--dark);
        font-family: 'Carter One', cursive;
        font-size: 21px;
        text-align: center;
        text-decoration: underline;
        font-weight: 300;

    }

    p{
        color: var(--dark);
        font-size: 17px;
        font-family:'Satisfy', cursive;
        text-align: center;
        padding-top: 2px;
    }

    .precio{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 30px;
    }

    .precioTachado p{
        font-family: 'Righteous', cursive;
        text-decoration: line-through;
        padding-top: 2px;
        color: grey;
    }

    .precioOferta p{
        font-family: 'Righteous', cursive;
        font-size: 1.8rem;
        font-weight: bold;
        color: rgb(251, 7, 3);
        padding-bottom: 18px;
    }
`

const ImageContainer = styled.div`
width:100%;
text-align: center;
`

const ButtAddProduct= styled.button`
  color: white;
  background-color: var(--dark35);
  padding: 1rem;
  position: relative;
  top: -10px;
  border-radius: 0.5rem;
  border: none;
  font-family: 'Righteous', cursive;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  width:80%;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);

  @media screen and (min-width: 1024px){
  &:hover{background-color: #999898 !important;}}

  &:active {
    background-color: var(--orange) !important;
    box-shadow: none;
    transform: translateY(4px);}
    `
