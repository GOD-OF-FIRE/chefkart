import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ingrediants from "./Ingrediants";
import { Route, Routes } from "react-router-dom";
const Dish = () => {
  let [dish, setDishes] = useState();
  let dishes = async () => {
    try {
      let res = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      let data = await res.json();
      console.log(data.dishes);
      setDishes(data.dishes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dishes();
  }, []);
  return (
    <div>
      <div className="dishes">
     
          {dish.map(({ name, rating, description, image, id }) => {
            return (
              <div className="wrap" key={id}>
                <div className="dishDetails">
                  <h3>
                    {name}
                    <span className="rating">{rating}</span>
                  </h3>
                  <Link className='links' to='/ingrediants'>Ingrediants</Link>
                  <div className="description">{description}</div>
                </div>
                <div className="dishImage">
                  <img src={image} />

                  <div className="add">Add+</div>
                </div>
              </div>
            );
          })}
        </div>

     

      
    </div>
  );
};
export default Dish;
