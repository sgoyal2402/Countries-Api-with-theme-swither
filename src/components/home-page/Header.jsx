import React, { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(true);

  function handleClick(event) {
    setDark((prevV) => !prevV);
    if (dark) {
      document.body.style.setProperty("--bg-color", "#202c37");
      document.body.style.setProperty("--ele-color", "#2b3945");
      document.body.style.setProperty("--text-color", "#fff");
      document.body.style.setProperty("--shadow-color", "#202c37");
      event.target.innerHTML = "<i class='far fa-moon'></i> Light Mode";
    } else {
      document.body.style.setProperty("--bg-color", "#fafafa");
      document.body.style.setProperty("--ele-color", "#fff");
      document.body.style.setProperty("--text-color", "#111517");
      document.body.style.setProperty("--shadow-color", "#e0e0e0");
      event.target.innerHTML = "<i class='far fa-moon'></i> Dark Mode";
    }
  }
  return (
    <header>
      <div className="container flex">
        <h1>Where in the World?</h1>
        <button onClick={handleClick} className="btn btn-primary ml-auto">
          <i className="far fa-moon"></i> Dark Mode
        </button>
      </div>
    </header>
  );
}
