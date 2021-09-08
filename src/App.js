import React from "react";
import logo from './logo.svg';
import './App.css';
import { employeeData } from "./data.js"
import { Welcome } from "./welcome.js"
// import {ingredientItems} from "./DropDown/DropDownList.js"

  const cats = employeeData.map(q => q.company);
    console.log(
    cats.filter((q, idx) => 
    cats.indexOf(q) === idx)
    )

function App() {
  return (
    <div className="App">

    <Welcome />
    {employeeData[7].name}
  
      {/* <select onChange={handleChange}>
        {ingredientItems}
      </select>
   */}
    </div>
  );
}

export default App;
