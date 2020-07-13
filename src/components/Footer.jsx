import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> Nandika Jain</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
