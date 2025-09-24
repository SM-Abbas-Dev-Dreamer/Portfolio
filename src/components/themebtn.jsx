import React, { useState } from "react";
import "./themebtn.css";

function ThemeButton() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDark(!dark);
  };

  return (
    <>
      <button className="themebtn" onClick={toggleTheme}>
        {" "}
        {dark ? (
          <i class="fa-solid fa-sun"></i>
        ) : (
          <i class="fa-solid fa-moon"></i>
        )}{}
        
      </button>
    </>
  );
}

export default ThemeButton;
