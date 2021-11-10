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
  const [isF, setIsF] = useState(true);

  useEffect(() => {
    setIsF(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCountry(result);
        setIsF(false);
      });
  }, [url]);
  return (
    <>
      {!isF && <div className="container mt-5">
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
      </div>}
      {isF && 
      <div className="d-flex justify-content-center align-items-center" style={{height: "80vh"}}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
    </>
  );
}

export default DetailPage;
