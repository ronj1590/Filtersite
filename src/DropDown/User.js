import React from 'react'

const User = (props) => {
    const panelItems = [
        { name: 'Employee', value: 'John Doe' },
    ]

    return ( 
        <div className = 'User'>
        {panelItems.map(panelItem => (
          <div className = 'employee'><div className = 'employeeName'>{User.name}</div><div className = 'employeeValue'> {User.value}</div></div>
        ))}
        
     </div>
    );
        
        }
  export default User;