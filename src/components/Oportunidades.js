import React from 'react';
import styled from 'styled-components';
import line from "../assets/images/line.webp"
import promo1 from "../assets/images/promo1.webp";
import promo5 from "../assets/images/promo5.webp";
import Button from './Button';



const Oportunidades = () => {
    
  return (
    <ConteinerOportunidades>    
        <Titulo>
            <div className='titulo'>
                <div className='lineLeft'>
                    <img src={line} alt="linea" width="100%"/>
                </div>
                <div className='tituloOportunidades'>
                    <h1>OPORTUNIDADES</h1>
                </div>
                <div className='lineRight'>
                    <img src={line} alt="linea" width="100%"/>
                </div>
            </div>
        </Titulo>
        <ContenedorCards>
            <Card>
                <ImageContainer><img src={promo1} alt="promo" width="220px" height="220px"/></ImageContainer>
                <Caption>   
                    <h3>Promoción 1:</h3>
                    <p>C. Piel de Lobo - P. Toso - E. Gascón -<br></br>Dv Catena - Desquiciado - Elementos</p>
                    <div className='precio'>
                        <div className='precioTachado'>
                                <p>$ 46.700.-</p>
                        </div>
                        <div className='precioOferta'>
                                <p>$ 38.900.-</p>
                        </div>
                    </div>
                </Caption>   
                <Button/>
            </Card>

            <Card>
                <ImageContainer><img src={promo5} alt="promo" width="220px" height="210px"/></ImageContainer>
                <Caption>   
                    <h3>Promoción 2:</h3>
                    <p>Miguel Minni - Cafayate - Vallisto -<br></br> Mariflor - Trumpeter - Gauchezco</p>
                    <div className='precio'>
                        <div className='precioTachado'>
                                <p>$ 39.400.-</p>
                        </div>
                        <div className='precioOferta'>
                                <p>$ 33.700.-</p>
                        </div>
                    </div>
                </Caption>   
                <Button/>
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

@media screen and (min-width: 1024px){
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
padding-top: 1rem;
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
    font-size: 2rem;
    font-family: var(--subtitle-font);
    text-align: center;
    text-decoration: underline;
    font-weight: bold;

    }

    p{
    color: var(--dark);
    font-size: 1.2rem;
    font-family: var(--text-font);
    text-align: center;
    }

    .precio{
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 30px;
    }

    .precioTachado p{
        font-family: var(--text-font);
        text-decoration: line-through;
        padding-top: 2px;
        color: grey;
    }

    .precioOferta p{
        font-family: var(--text-font);
        font-size: 1.5rem;
        font-weight: bold;
        color: rgb(251, 7, 3)
    }
`

const ImageContainer = styled.div`
width:100%;
text-align: center;
`