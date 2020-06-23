import React, { useState, useEffect } from "react";
import Countries from "./home-page/Countries";
import Search from "./home-page/Search";
import Region from "./home-page/Region";
import Header from "./home-page/Header";

function HomePage() {
  const [allC, setAllC] = useState([]);
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all");

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setAllC(result);
      });
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  }, [url]);

  return (
    <>
      <Header />
      <div className="container flex mt-4 mb-3">
        <Search allC={allC} changeCountries={setCountries} changeUrl={setUrl} />
        <Region
          allC={allC}
          changeCountries={setCountries}
          changeUrl={setUrl}
          countries={countries}
        />
      </div>

      <Countries countries={countries} />
    </>
  );
}

export default HomePage;
