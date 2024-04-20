import React from 'react'
import './FooterStyle.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGoogleCircle } from "react-icons/ai";

function Footer() {
  return (
    <>
    <div className="row mx-0 footer">
        <div className="footer-icons" >
            <i><FaFacebook /></i>
            <i><IoLogoWhatsapp /></i>
            <i><AiFillGoogleCircle /></i>
        </div>
    </div>
    </>
  )
}

export default Footer