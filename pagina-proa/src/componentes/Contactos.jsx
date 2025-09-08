import React from 'react'
import { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "../CSS/Redes.css"

function Contantos() {
  const [active, setActive] = useState(false);

  return (
    <>
    <div className="conteiner">
    <div className={`menu ${active ? "active" : ""}`}>
        <div className="toggle" onClick={() => setActive(!active)}>
          <ion-icon name="share-social"></ion-icon>
        </div>


        <div className="social-item facebook">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
        <div className="social-item twitter">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div className="social-item instagram">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <ion-icon name="logo-instagram" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" ></ion-icon>
          </a>
        </div>
        <div className="social-item linkedin">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contantos