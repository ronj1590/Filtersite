import React from 'react' 

    const MetricBoxes = (props) => {
        const cards = [
        { image: '', name: 'Capacity', value: '1Gb of 1000Gb used' },
        { image: '',name: 'Number Of users', value: '156 users out 1,000,000' },
        { image: '',name: 'Quality of Service', value: 'Excellent Work'},
        { image: '',name: 'Per Company Stats', value: 'Something I made up'}
      ]
    
  
      
      return ( 
          <div className = 'MetricBox'>
          {cards.map(card => (
            <div className = 'OneMetricBox'><div className = 'MetricBoxImage'>{card.image}</div><div className = 'MetricBoxName'>{card.name}</div><div className = 'MetricBoxValue'> {card.value}</div></div>
          ))}
          
       </div>
      );
          
          }
    export default MetricBoxes;