import React from 'react'
import selectedCompany from './DropDownMenu'

const SidePanel = (props) => {

    const panelItems = [
        { name: 'Company', value: props.selectedCompany },
        { name: 'Country', value: props.selectedCountry },
        { name: 'Office', value: props.selectedCity },
        { name: 'Employees', value: props.selectedName }

    ]

    return ( 
        <div className = 'SidePanel'>
        {panelItems.map(panelItem => (
          <div className = 'Company'><div className = 'companyName'>{panelItem.name}</div><div className = 'companyValue'> {panelItem.value}</div></div>
        ))}
        
     </div>
    );

}
export default SidePanel;