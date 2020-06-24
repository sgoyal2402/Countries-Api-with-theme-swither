import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container flex">
        <h1>Where in the World?</h1>
        <button className="btn btn-primary ml-auto">
          <i className="far fa-moon"></i> Dark Mode
        </button>
      </div>
    </header>
  );
}
