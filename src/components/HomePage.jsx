import React, { useState, useEffect } from "react";
import Countries from "./home-page/Countries";
import Search from "./home-page/Search";
import Region from "./home-page/Region";
import Header from "./home-page/Header";

function HomePage(props) {
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all");
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  }, [url]);

  return (
    <>
      <div className="sticky">
        <Header />
        <div className="container flex mt-4 mb-3">
          <Search
            setIsFilter={setIsFilter}
            allC={props.allC}
            changeCountries={setCountries}
            changeUrl={setUrl}
          />
          <Region
            isFilter={isFilter}
            setIsFilter={setIsFilter}
            allC={props.allC}
            changeCountries={setCountries}
            changeUrl={setUrl}
            countries={countries}
          />
        </div>
      </div>
      <Countries detail={props.detail} countries={countries} />
    </>
  );
}

export default HomePage;
