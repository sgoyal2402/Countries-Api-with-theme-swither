import React, { useState, useEffect } from "react";

import HomePage from "./HomePage";
import DetailPage from "./DetailPage";
import Header from "./home-page/Header";

function App() {
  const [detail, setDetail] = useState("ind");
  function showDetail(id) {
    document.getElementById("home").classList.add("hidden");
    document.body.classList.add("white");
    document.getElementById("detail").classList.remove("hidden");
    setDetail(id);
  }
  const [allC, setAllC] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setAllC(result);
      });
  }, []);
  return (
    <>
      <Header />
      <div id="home">
        <HomePage detail={showDetail} allC={allC} />
      </div>
      <div id="detail" className="hidden">
        <DetailPage detail={detail} changeDetail={setDetail} allC={allC} />
      </div>
    </>
  );
}

export default App;
