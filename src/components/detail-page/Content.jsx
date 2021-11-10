import React from "react";

function Content(props) {
  let borderC = [];
  if(props.country.borders !== undefined)
  props.country.borders.forEach((b) => {
    let border = props.allC.filter((country) => {
      return country.alpha3Code === b;
    });
    if (border[0] !== undefined) borderC.push(border[0]);
  });

  function handleClick(e) {
    const id = e.target.id;
    props.changeDetail(id);
  }

  return (
    <div className="row mt-5">
      <div className="col-md-5">
        <img className="flag" src={props.country.flag} alt="flag" />
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-6">
        <h2>{props.country.name}</h2>
        <div className="row mt-3">
          <div className="col-6">
            <p>
              <strong>Native Name:</strong> {props.country.nativeName}
            </p>
            <p>
              <strong>Popualtion:</strong>{" "}
              {props.country !== {} &&
                props.country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {props.country.region}
            </p>
            <p>
              <strong>Sub Region:</strong> {props.country.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {props.country.capital}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong>Top Level Domain:</strong> {props.country.topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {props.country.currencies.map((currency) => `${currency.name}, `)}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {props.country.languages.map((language) => `${language.name}, `)}
            </p>
          </div>
        </div>
        <div className="borders row mt-5">
          <div className="col-md-4 col-sm-5 mb-4">
            <strong>Border Countries:</strong>{" "}
          </div>
          <div className="col-md-8 col-sm-12">
            {borderC.length !== 0 &&
              borderC.map((border, index) => {
                return (
                  <button
                    key={index}
                    id={border.alpha3Code}
                    onClick={handleClick}
                    className="btn btn-sm btn-primary mr-3 mb-3"
                  >
                    {border.name}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
