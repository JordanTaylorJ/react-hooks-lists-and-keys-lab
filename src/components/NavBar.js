import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const nav = links.map((link) => <a key={link} href={'#' + link}>{link}</a>)

  return <nav>
    {nav}
  </nav>;
}

export default NavBar;
