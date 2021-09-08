import React from 'react'
import DropDownItem from './DropDownItem.js'

const DropDownList = (props) => {
    const handleChange = e => props.onClick( e.target.value );
    let countryNames = [];
    props.employeeData.forEach((entry) => {countryNames.push(entry[props.selected])});

let uniqueCountries = countryNames.filter((c, index) => {
    return countryNames.indexOf(c) === index ;
});

    const worldItems = uniqueCountries.map((ingredient) =>{
      return(<DropDownItem key={ingredient.name} ingredient={ingredient} />)
    
    });
  
    return (
      <li onClick={handleChange}>
        {worldItems}
      </li>
    )
  }
export default DropDownList;