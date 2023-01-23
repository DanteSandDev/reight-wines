import styled from "styled-components"
import atardecerFondo from "../assets/images/atardecerFondo.webp"
import logo from "../assets/images/logoGrandeConFondo.webp"
import dante from "../assets/images/team/dante.jpg"
import facu from "../assets/images/team/facu.jpg"
import anto from "../assets/images/team/anto.jpg"

import flor from "../assets/images/team/flor.jpeg"
import gracy from "../assets/images/team/gracy.jpeg"
import seba from "../assets/images/team/seba.jpeg"





const Nosotros = () => {
  return (
    <>
    <NosotrosContenedor>
      <Logo>
        <img src={logo} alt="Reight" width="100%" height="100%" />
      </Logo>

      <FraseContainer>
        <p>Brindamos el servicio de enólogia a destacados Hoteles y Restaurants de Argentina. <br></br>
          A través de nuestra página web les acercamos una variedad de bebidas, accesorios y delicatessen que fueron seleccionados especialmente para que puedan disfrutarlos.
        </p>
      </FraseContainer>
      
    </NosotrosContenedor>
    <TeamSection>

      {
        person.map(({imagen, nombre, info, linkedin, github}, index) => (
          <TeamCard key={index}>
            <div className="img-box">
              <img className="person-img" src={imagen} alt="team.jpg" />
            </div>
            <div className="card-content-box">
              <p className="text person-name">{nombre}</p>
              <p className="text person-info">{info}</p>
              <div className="person-contact">
                <a href={linkedin} target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href={github} target="_blank"><i class="fa-brands fa-github"></i></a>
              </div>
            </div>
          </TeamCard>
        ))
      }


    </TeamSection>
    </>
    )
  }

export default Nosotros


const NosotrosContenedor = styled.div`
width: 100%;
height: 60vh;
background-image: url(${atardecerFondo});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
gap: 30px;

  @media screen and (min-width: 768px){
    height: 70vh;
    gap: 80px;
  }
`

const Logo = styled.div`
width: 200px;
height: 200px;

  @media screen and (min-width: 768px){
    width: 240px;
    height: 240px;
    }

    @media screen and (min-width: 1200px){
    width: 260px;
    height: 260px;
    }
  `

const FraseContainer = styled.div`
width: 95%;
height: 35%;
background: rgb(251, 243, 232, 51%);
border-radius: 10px;


  @media screen and (min-width: 768px){
    width: 90%;
    height: 20%;
    }

    @media screen and (min-width: 1200px){
      width: 65%;
    }

  p{
    text-align: center;
    color: var(--dark);
    font-size: 1.6rem;
    font-family: var(--text-font);
    font-weight: 600;
    padding: 1rem;
  
  }
    @media screen and (min-width: 768px){
    p{
      font-size: 1.6rem;

    }
    }

    @media screen and (min-width: 1200px){
    p{
      font-size: 1.8rem;
      padding: 0.5rem;
    }
  }
  `

  /************ TEAM SECTION ************/
  const TeamSection = styled.div`
    padding: 3rem;
    display:flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;

    @media screen and (min-width: 768px){
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    @media screen and (min-width: 1200px){
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
    }
  `

  const TeamCard = styled.div`
    padding: 16px;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 30%) 6px 8px 5px;;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 350px;
    border: 0.15rem solid var(--orange);
    
    @media screen and (min-width: 1200px){
      width: 400px;
      height: 200px;
    }

    &:hover .person-img{
      scale:1.1;
    }

    .img-box{
      width: 100%;
      max-width: 17rem;
      max-height: 17rem;
      height: 100%;
      margin-right: 4rem;
      border-radius: 20px;
      overflow: hidden;

      .person-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: #000;
        transition: 300ms all;
      }
    }

    .card-content-box{
      display: flex;
      flex-direction: column;
      justify-content: center;

      .person-name{
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: .5rem;
      }
      .person-info{
        font-size: 1.6rem;
        line-heigt: 1.5rem;
      }

      .person-contact{
        display: flex;
        justify-content: space-around;

        a{
          font-size: 3rem;
          color: var(--dark);
          transition: 300ms all;
        }
        a:hover{
          color: var(--pink);
        }
      }
    }

  `

  const person = [
    {
      id: "1",
      imagen: `${dante}` ,
      nombre: "Dante Sandoval" ,
      info: "Web Developer" ,
      linkedin: "https://www.linkedin.com/in/dantesanddev" ,
      github: "https://github.com/DanteSandDev"
    },
    {
      id: "2",
      imagen: `${gracy}` ,
      nombre: "Graciela Faria" ,
      info: "Web Developer" ,
      linkedin: "https://www.linkedin.com/in/graciela-faria-5b0389130" ,
      github: "https://github.com/gracy94"
    },
    {
      id: "3",
      imagen: `${seba}` ,
      nombre: "Sebastian Müller" ,
      info: "Web Developer" ,
      linkedin: "https://www.linkedin.com/in/sebastian-alejandro-muller" ,
      github: "https://github.com/Sebastian-Muller"
    },
    {
      id: "4",
      imagen: `${anto}` ,
      nombre: "Antonela Bonaglia" ,
      info: "Web Developer" ,
      linkedin: "www.linkedin.com/in/anto-bonaglia" ,
      github: "https://github.com/AntonelaBonaglia"
    },
    {
      id: "5",
      imagen: `${facu}` ,
      nombre: "Facundo De los Rios" ,
      info: "Web Developer" ,
      linkedin: "https://www.linkedin.com/in/facundo-delosrios" ,
      github: "https://github.com/FacundoDLR"
    },
    {
      id: "6",
      imagen: `${flor}` ,
      nombre: "Florencia Staricco" ,
      info: "Web Developer" ,
      linkedin: "https://www.linkedin.com/in/florencia-staricco" ,
      github: "https://github.com/FlorStaricco"
    },
    
  ]
