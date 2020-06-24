import React, { useState, useEffect } from "react";
import { codeUrl } from "./fetchCountries";
import Content from "./detail-page/Content";

function DetailPage(props) {
  function handleClick() {
    document.getElementById("home").classList.remove("hidden");
    document.body.classList.remove("white");
    document.getElementById("detail").classList.add("hidden");
  }
  const url = codeUrl(props.detail);
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCountry(result);
      });
  }, [url]);
  return (
    <>
      <div className="container mt-5">
        <button onClick={handleClick} className="btn btn-lg btn-primary back">
          <i className="fas fa-arrow-left mr-2"></i> Back
        </button>
        {Object.keys(country).length !== 0 ? (
          <Content
            country={country}
            allC={props.allC}
            changeDetail={props.changeDetail}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default DetailPage;
