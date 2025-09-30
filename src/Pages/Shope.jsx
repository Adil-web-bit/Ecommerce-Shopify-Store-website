import React from "react";
import Hero from "../Components/Hero/Hero"; // Updated import path
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from "../Components/NewsLetter/Newsletter";



const Shope = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  );
};

export default Shope;
