import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { AboutData } from "../../data/aboutData";


function Footer() {
    const {
        gitLink,
        facebookLink,
        igLink,
        linkedInLink,
    } = AboutData;
  return (
    <div className="about-link-container">
    <h2 className="about-link-title">Contact links</h2>
    <a className="about-link" href={gitLink}>
      <FaGithub className="icon" />
    </a>
    <a className="about-link" href={facebookLink}>
      <FaFacebook className="icon" />
    </a>
    <a className="about-link" href={igLink}>
      <FaInstagram className="icon" />
    </a>
    <a className="about-link" href={linkedInLink}>
      <FaLinkedin className="icon" />
    </a>
  </div>
  )
}

export default Footer