import React from "react";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://media.discordapp.net/attachments/1293357057709182986/1412086345018507434/s_0_escuela-proa-logo.png?ex=68b70363&is=68b5b1e3&hm=846997e6ea203f1a0f0e25200d761f0c6bc6f1dfa3fd8139d3076677cd358984&=&format=webp&quality=lossless&width=566&height=569"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          website_proa
        </a>
      </div>
    </nav>
  );
}

export default Navbar