import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';
 
const orders = [
  {
    cone: 'cone',
    size: 'small',
    scoops: 1,
    customerId: 0 
  },
  {
    cone: 'cup',
    size: 'large',
    scoops: 3,
    customerId: 1 
  },
  {
    cone: 'cup',
    size: 'medium',
    scoops: 2,
    customerId: 2 
  }
]

ReactDOM.render(
    <div>
      <Order />
    </div>, 
  document.getElementById('root')
);
