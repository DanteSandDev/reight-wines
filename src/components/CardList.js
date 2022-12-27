import React from "react";
import Card from "./Card";
import CardsModal from "./CardsModal";
import "../styles/cardsStyles.css";
import { useState } from "react";
import styled from "styled-components";



const images = require.context("../assets/images", true);
const vinos = [
    {
        id: 1,
        nombre: "Sexy Fish",
        tipo: "Malbec",
        precio: 2100,
        image: images('./malbec.webp'),
    },
    {
        id: 2,
        nombre: "Pedriel",
        tipo: "Rosado de Malbec",
        precio: 3600,
        image: images('./rosado.webp'),
    },
    {
        id: 3,
        nombre: "Antigal Uno",
        tipo: "Sauvignon Blanc",
        precio: 3000,
        image: images('./sauvBlanc.webp'),
    },
    {
        id: 4,
        nombre: "Jonnie Walker",
        tipo: "Double Black Whisky",
        precio: 11300,
        image: images('./jonniewalker.webp'),
    },
    {
        id: 5,
        nombre: "Chivas Regal 12",
        tipo: "Blended Scotch Whisky",
        precio: 11000,
        image: images('./chivas.webp'),
    },
    {
        id: 6,
        nombre: "Veuve Clicquot",
        tipo: "Champagne Rosé",
        precio: 45900,
        image: images('./veuveClicquot.webp'),
    },
    {
        id: 7,
        nombre: "G. H. Mumm Cordon",
        tipo: "Champagne Rouge Brut",
        precio: 12800,
        image: images('./ghMumm.webp'),
    },
    {
        id: 8,
        nombre: "Atemporal G. Elevage",
        tipo: "Champagne Brut Nature",
        precio: 15600,
        image: images('./altaVista.webp'),
    },
];

const initialState = false;

const CardList = () => {

    const [modalOpen, setModalOpen] = useState(initialState);

    // const openCardsModal = () => setModalOpen(true);

    // const closeCardsModal = () => setCardsModalOpen(false);

return (
    <CardsSection>
        <CardsModal vinos={vinos} modalOpen={modalOpen} setModalOpen={setModalOpen}></CardsModal>
        
        {vinos.map((vino) => (
        <Card key={vino.id} vinos={vino} modalOpen={modalOpen} setModalOpen={setModalOpen} ></Card>))}
    </CardsSection>
)
}

export default CardList


const CardsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: center;
`