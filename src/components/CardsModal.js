import "../styles/cardsModal.css";
import React from 'react'
import Button from "./Button";

const images = require.context("../assets/images", true);

const CardsModal = ({modalOpen, setModalOpen}) => {
    
    return (
    <article className={`modal ${modalOpen && "is-open"}`}>
        <div className="modal-container">
            <button className="modal-close" onClick={()=>setModalOpen(modalOpen)}>x</button>
            <img src={images('./malbec.webp')} alt="Malbec" width="40rem"/>
            <h3>Sexy Fish</h3>
            <p>Malbec</p>
            <p style={{color: 'var(--orange)'}}>$2100.-</p>
            <br />
            <h3>Viñedos</h3>
            <p>Edad: 15 años<br/> Rendimiento: 120 qq/ha<br/>Fermentacion: Tanques de acero inoxidable<br/> Conservación : En vasijas de concreto.</p>
            <Button></Button>
        </div>
    </article>
    )
}

export default CardsModal
