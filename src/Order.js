import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';

class Order extends React.Component {
  render() {
    debugger; 
    
    return (  
      <div className='order'>
        <ProfileCard customer={this.props.customerId} />
        <ul>
          <li>Cone or cup: {this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>Size: {this.props.size}</li>
          <li>Scoops: {this.props.scoops}</li>
          <li>Ordered by: {this.props.customerId}</li>
        </ul>
      </div>
    );
  };
};

Order.defaultProps = {
  cone: true,
  size: 'regular',
  scoops: 1
};

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string, 
  // scoops: PropTypes.array.isRequired
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  customerId: PropTypes.number
  // orderInfo: PropTypes.object.isRequired
  // orderInfo: PropTypes.shape({
  //   customerName: PropTypes.string.isRequired,
  //   orderedAt: PropTypes.number.isRequired
  // }).isRequired
};

export default Order;
