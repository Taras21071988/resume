import React from "react";
import cl from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className="container">
        <div className={cl.footerWrapper}>
          <div className={cl.detailsWrapper}>
            <h3 className="title">Details</h3>
            <p>Ukraine,Kharkiv</p>
            <a href="tel:+380660825496">+380660825496</a>
            <a className={cl.detailsMail} href="mailto:tsasojlov@icloud.com">
              Mail
            </a>
          </div>
          <div className={cl.linksWrapper}>
            <h3 className="title">Links</h3>
            <p>
              <a href="https://github.com/Taras21071988">Git Hub</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/taras-samoilov/">Linkedin</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
