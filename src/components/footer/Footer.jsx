import React from "react";
import cl from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className="container">
        <div className={cl.footerWrapper}>
          <div>
            <h3 className="title">Details</h3>
            <p>Ukraine,Kharkiv</p>
            <a href="tel:+380660825496">+380660825496</a>
            <a href="mailto:tsasojlov@icloud.com">Mail</a>
          </div>
          <div>
            <h3 className="title">Links</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
