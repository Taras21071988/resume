import React from "react";
import cl from "./Fragments.module.scss";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";

const Fargments = () => {
  return (
    <div className={cl.wrapper}>
      <Profile />
      <Skills />
    </div>
  );
};

export default Fargments;
