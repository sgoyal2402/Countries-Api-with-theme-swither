import React from "react";
import Card from "./Card";

const Countries = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {Array.isArray(props.countries) &&
          props.countries.map((country) => {
            return (
              <div
                id={country.numericCode}
                key={country.numericCode}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              >
                <Card country={country} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
