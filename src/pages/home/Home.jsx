import React from "react";
import Featured from "../../components/featured/Featured";

import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";

import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property type</h1>
     <PropertyList/>
      </div>
    </div>
  );
}

export default Home;
