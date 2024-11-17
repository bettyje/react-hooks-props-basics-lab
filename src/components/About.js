import React from "react";
import Links from "./Links";

const About = ({ bio, github, linkedin }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Render the bio only if it's passed and not an empty string */}
      {bio && bio.trim() !== "" ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass github and linkedin to the Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
};

export default About;
