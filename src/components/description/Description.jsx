import React from "react";
import cl from "./Description.module.scss";
import Fargments from "../fragments/Fargments";

const Description = ({ name, job}) => {
  return (
    <main className={cl.wrapper}>
      <div className="container">
        <div className={cl.performance}>
          <h1 className={cl.performanceName}>{name}</h1>
          <h3 className={cl.performanceJob}>{job}</h3>
        </div>
        <Fargments/>
      </div>
    </main>
  );
};

export default Description;
