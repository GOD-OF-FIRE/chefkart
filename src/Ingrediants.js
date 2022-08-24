import React from "react";
import { useState, useEffect } from "react";
const Ingrediants = () => {
    let [ingrediants, setIngrediants] = useState();
    let getIngrediants = async () => {
      try {
        let res = await fetch(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
        );
        let data = await res.json();
        console.log(data);
        setIngrediants(data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getIngrediants();
    }, []);
  return (
    <div className="wrapper">
      <div className="dishDetails">
        <h2>
          Mashala Mughali
          <span className="rating">4.3</span>
        </h2>
        <p>
          Mughali Mashala is a style of cookery developed in the Indian
          Subcontinent by the imperial kitches of the Mughal Empire.
        <span>⏰ 1 Hour</span>
        </p>
      </div>
      <h3>Ingrediants</h3>
      <h4>Vegetales</h4>
      <div className="Ingrediants">
        <div className="items">
          <p>Cauliflower</p>
          <p>Tomato</p>
          <p>Spinach</p>
        </div>
        <div>
          <p>01 Pc</p>
          <p>10 Pc</p>
          <p>1/2 Kg</p>
        </div>
      </div>
      <h4>Spices</h4>
      <div className="Ingrediants">
        <div>
          <p>Coriander</p>
          <p>Mustard Oil</p>
        </div>
        <div>
          <p>100 gram</p>
          <p>1/2 litres</p>
        </div>
      </div>
      <h3>Appliances</h3>
      <p>Refigerator</p>
    </div>
  );
};

export default Ingrediants;
