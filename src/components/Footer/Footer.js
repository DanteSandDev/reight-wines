import React from 'react'
import styled from 'styled-components'

import logo from "../../assets/images/logoLetrasBlancas.webp"
import location from "../../assets/icons/maps.svg"
import phone from "../../assets/icons/telephone.svg"
import wsp from "../../assets/icons/wa.svg"
import mail from "../../assets/icons/mail.svg"
import cace from "../../assets/icons/cace.webp"
import ssl from "../../assets/icons/descarga.webp"
import dFiscal from "../../assets/icons/dataFiscal.png"
import mPago from "../../assets/icons/mercadopago.webp"
import visa from "../../assets/icons/visa.webp"
import mc from "../../assets/icons/mastercard.webp"
import amex from "../../assets/icons/american.webp"
import SocialsBar from './SocialsBar'



const Footer = () => {
    
    const ContainerFooter = styled.div`
        background-color: var(--dark);
        color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;

        @media (min-width:1024px){
            flex-direction: row;
            gap: 2rem;
            align-items:flex-start;
            justify-content: center;
        }
    `;

    const logoFooter = {
        width: "25rem",
    }

    const BoxFooter = styled.div`
        margin: 1.5rem 0;
        width: 25rem;
    `;
    const Anchor = styled.a`
        color: #fff;
        textDecoration: "none";

        &:hover{
            text-decoration: underline;
        }
    `;

    const FooterContact = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
    const BoxTitle = styled.div`
        font-family: var(--title-font);
        border-bottom: 1px solid;
        margin-bottom: 2rem;
    `;
    const BoxContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.3rem;
    `;
    const BoxText = styled.div`
        display: flex;
        align-items: center;

        .payText{
            line-height: 3rem;
        }
    `;
    const BoxImg = styled.div`
        background-image: ${(props) => props.background};
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 1rem;
        width: 2rem;
        height: 2rem;
    `;

    const ContentPayment = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    `;
    const PayImg = styled.div`
        width: 7rem;
        height: 6rem;
        background-image: ${(props) => props.background};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    `;


  return (
    <footer>
        <SocialsBar/>
        <ContainerFooter>

            <div className="footer__img">
                <img style={logoFooter} src={logo} alt="logo reight" />
            </div>
            <BoxFooter>
                <BoxTitle><h3>Atencion al Cliente</h3></BoxTitle>
                <BoxContent>
                    {footerList.map(({background, text, href, target}, index) => (
                        <BoxText key={index}>
                            <BoxImg background={background}></BoxImg>
                            <Anchor href={href} target={target}>{text}</Anchor>
                        </BoxText>
                    )) }
                </BoxContent>
            </BoxFooter>

            <BoxFooter>
                <BoxTitle><h3>Para Saber</h3></BoxTitle>
                <BoxContent>
                    {toKwnowBox.map(({text, href, target}, index) => (
                        <BoxText key={index}>
                            <Anchor href={href} target={target}>{text}</Anchor>
                        </BoxText>
                    )) }
                </BoxContent>
            </BoxFooter>

            <BoxFooter>
                <BoxTitle><h3>Sitio Seguro</h3></BoxTitle>
                <BoxContent>
                    <BoxText>
                    <p className='payText'>A través de todos los medios de pago y promociones bancarias de Mercado Pago</p>
                    </BoxText>
                    <ContentPayment>
                        {paySecure.map(({background}, index) => (
                            <PayImg key={index} background={background}></PayImg>
                        ))}
                    </ContentPayment>
                </BoxContent>
            </BoxFooter>

        </ContainerFooter>

    </footer>
  )
}

const footerList = [
    {
        id: "1",
        background: `url(${location})`,
        text: "Av. Las Heras 2440 - C.A.B.A",
        href: "#",
        target: ""
    },
    {
        id: "2",
        background: `url(${phone})`,
        text: "4803 - 6587",
        href: "tel:+5491148036587",
        target: ""
    },
    {
        id: "3",
        background: `url(${wsp})`,
        text: "+54 9 11-5629-8468",
        href: "https://wa.me/+5491156298468?text=¡Me+encanto+su+proyecto...+Quiero+sumarme!",
        target: "_blank"
    },
    {
        id: "4",
        background: `url(${mail})`,
        text: "reight@gmail.com",
        href: "mailto:reight@gmail.com",
        target: ""
    },
];

const toKwnowBox = [
    {
        text: "Politicas de Privacidad",
        href: "#",
        target: "",
    },
    {
        text: "Términos y Condiciones",
        href: "#",
        target: "",
    },
    {
        text: "Arrepentimiento de Compra",
        href: "#",
        target: "",
    },
]

const paySecure = [
    {
        background: `url(${visa})`,
    },
    {
        background: `url(${mc})`,
    },
    {
        background: `url(${amex})`,
    },
    {
        background: `url(${mPago})`,
    },
    {
        background: `url(${cace})`,
    },
    {
        background: `url(${ssl})`,
    },
    {
        background: `url(${dFiscal})`,
    },
]

export default Footer