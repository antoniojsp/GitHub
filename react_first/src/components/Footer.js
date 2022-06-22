import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";


import "../styles/Footer.css";
import { UrlList } from "../helpers/UrlList"

function Footer() {

    const hyper_link = (type) => {window.location.href= UrlList[type]};
    const email = (email) => { window.location = UrlList.Email};

  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon onClick={event => hyper_link("Facebook")}/>
        <LinkedInIcon onClick={event => hyper_link("Linkedin")}/>
        <InstagramIcon onClick={event => hyper_link("Instagram")}/>
        <EmailIcon onClick={event => email("Email")}/>

      </div>
      <p> &copy; 2022 Antonio J. Silva Paucar</p>
    </div>
  );
}

export default Footer;