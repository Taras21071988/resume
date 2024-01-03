import React from "react";
import cl from "./Description.module.scss";
import Fargments from "../fragments/Fargments";

const Description = () => {
  return <main className={cl.wrapper}>
    <div className="container">
        <div className={cl.performance}>
            <h1 className={cl.performanceName}>Taras Samoilov</h1>
            <h3 className={cl.performanceJob}>Frontend Web Developer</h3>
        </div>
        <Fargments/>
    </div>
  </main>;
};

export default Description;
