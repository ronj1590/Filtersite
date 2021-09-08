import React from 'react'
import DropDownItem from './DropDownItem.js'

const DropDownLocation = (props) => {
    const handleChange = e => props.onClick( e.target.value );
    let countryNames = [];
    props.employeeData.forEach((entry) => {countryNames.push(entry["location"])});

let uniqueCountries = countryNames.filter((c, index) => {
    return countryNames.indexOf(c) === index;
});

    const worldItems = uniqueCountries.map((ingredient) =>{
      return(<DropDownItem key={ingredient.name} ingredient={ingredient} />)
    
    });
  
    return (
      <select onClick={handleChange}>
        {worldItems}
      </select>
    )
  }
export default DropDownLocation;