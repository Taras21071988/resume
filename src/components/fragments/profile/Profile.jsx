import React from "react";
import cl from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={cl.profileWrapper}>
      <div>
        <h3 className="title">Profile</h3>
        <p className={cl.profileText}>
          I've been studying front-end development for a year. Studied HTML,
          CSS, SASS, Java Script, Type Script, React. Examples of work can be
          viewed on my Git Hub profile.
        </p>
        <p className={cl.profileText}>
          Before I started studying front-end development, I worked in
          production where I configured software on special equipment.
        </p>
      </div>
    </div>
  );
};

export default Profile;
