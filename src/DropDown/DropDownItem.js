import React from 'react'

const DropDownItem = ({ingredient}) =>{
  const itemName = ingredient
    return(<option className="ClassListItems"  key={ingredient.name} value={itemName}>{itemName}</option> )
    
  }
export default DropDownItem;
