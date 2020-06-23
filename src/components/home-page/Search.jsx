import React, { useState } from "react";
import { searchUrl } from "../fetchCountries";

export default function Search(props) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value);

    if (value !== "") {
      const url = searchUrl(value);
      props.changeUrl(url);
    } else {
      props.changeCountries(props.allC);
    }
  }
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="Search-COuntry">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <input
        type="text"
        onChange={handleChange}
        className="form-control form-control-lg"
        placeholder="Search for a Country . . ."
        aria-label="Search-text"
        aria-describedby="Search-Country"
        value={query}
      />
    </div>
  );
}
