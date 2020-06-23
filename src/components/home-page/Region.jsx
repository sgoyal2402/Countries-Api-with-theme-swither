import React, { useState } from "react";
import { regionUrl } from "../fetchCountries";

export default function Region(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState("");
  const classMenu = `dropdown-menu${isOpen ? " show" : ""}`;

  function handleClick() {
    setIsOpen((prevValue) => !prevValue);
  }

  function changeRegion(event) {
    for (let i = 0; i < 5; i++) {
      document.getElementById(i).classList.remove("active");
    }

    const index = event.target.id;
    document.getElementById(index).classList.add("active");

    setRegion((prevV) => {
      if (prevV === regions[index] && props.countries !== props.allC) {
        props.changeCountries(props.allC);
        document.getElementById(index).classList.remove("active");
      }
      return regions[index];
    });

    const url = regionUrl(regions[index]);
    props.changeUrl(url);
  }

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  if (region !== "")
    document.getElementById(regions.indexOf(region)).classList.toggle("active");

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={handleClick}
        id="dropdownMenuButton"
        data-toogle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filter by Region{" "}
      </button>
      <div className={classMenu} aria-labelledby="dropdownMenuButton">
        {regions.map((region, index) => {
          return (
            <p
              onClick={changeRegion}
              id={index}
              key={index}
              className="dropdown-item"
            >
              {region}
            </p>
          );
        })}
      </div>
    </div>
  );
}
