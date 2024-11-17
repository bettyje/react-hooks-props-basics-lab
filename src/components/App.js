import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!

const App = () => {
  const user = {
    name: "Liza",
    city: "New York",
    bio: "I made this!",
    color: "firebrick",
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    },
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
};

export default App;
