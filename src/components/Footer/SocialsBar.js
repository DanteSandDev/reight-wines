import React from 'react'
import styled from 'styled-components'


import Fb from "../../assets/icons/facebook.svg"
import Ig from "../../assets/icons/instagram.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
import Twitter from "../../assets/icons/twitter.svg"

const SocialsContainer = styled.div`
    background-color: var(--yellow);
    padding: 2rem;
    display: flex;
    justify-content: space-around;
`;

const SocialIcon = styled.div`
    width: 3.5rem;
    height:3.5rem;
`;


const SocialsBar = () => {
  return (
    <div>
        <SocialsContainer>
            {ListSocialsIcon.map(({href, target, src, alt}, index) => (
                <SocialIcon key={index}>
                    <a href={href} target={target}><img src={src} alt={alt} /></a>
                </SocialIcon>
            ))} 
        </SocialsContainer>
    </div>
  )
}

const ListSocialsIcon = [
    {
        href: "#",
        target: "_blank",
        src: `${Fb}`,
        alt: "facebook.img",
    },
    {
        href: "#",
        target: "_blank",
        src: `${Ig}`,
        alt: "instagram.img",
    },
    {
        href: "#",
        target: "_blank",
        src: `${LinkedIn}`,
        alt: "linkedin.img",
    },
    {
        href: "#",
        target: "_blank",
        src: `${Twitter}`,
        alt: "twitter.img",
    },
]

export default SocialsBar