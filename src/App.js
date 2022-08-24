import Dish from "./Dish";
import Ingrediants from "./Ingrediants";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  let [popular, setPopular] = useState();
  let getpopularData = async () => {
    try {
      let res = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      let data = await res.json();
      console.log(data.popularDishes);
      setPopular(data.popularDishes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getpopularData();
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <div id="selectDishes">
          <h3> Select Dishes </h3>
        </div>
        <div className="black">
          <div className="datetime">
            <div className="date">
              <h4>🗓️ 21 May 2021</h4>
            </div>
            <div className="time">
              <h4>🕛 10:30 PM - 12:30PM </h4>
            </div>
          </div>
        </div>
        <div className="varity">
          <div>Italian</div>
          <div>Indian</div>
          <div>Indian</div>
          <div>Indian</div>
        </div>
        <h2 className="heading">Popular Dishes</h2>
        <div className="popular">
          {popular.map(({name,image,id}) => {
            return (
              <div className="item" key ={id}>
                <div className="imageset">
                  <img src={image} alt="" />
                  <h4>{name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Dish />

      <Routes>
        <Route path="/ingrediants" element={<Ingrediants />} />
        
      </Routes>



      
    </div>
  );
}

export default App;
