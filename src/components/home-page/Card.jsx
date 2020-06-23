import React from "react";

const Card = (props) => {
  return (
    <div className="card mb-5" style={{ width: "16rem" }}>
      <img src={props.country.flag} className="img-fluid" alt="FLAG" />
      <div className="card-body">
        <h5 className="card-title mb-4">{props.country.name}</h5>
        <p className="card-text">
          <strong>Population: </strong>
          {props.country.population.toLocaleString()}
        </p>
        <p className="card-text">
          <strong>Capital: </strong>
          {props.country.capital}
        </p>
        <p className="card-text">
          <strong>Region: </strong>
          {props.country.region}
        </p>
      </div>
    </div>
  );
};

export default Card;
