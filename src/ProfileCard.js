import React, { Component } from 'react';

const customers = [
  {
    firstName: 'Bob',
    lastName: 'Smith',
    gender: 'male',
    likes: 'peach cobbler'
  },
  {
    firstName: 'Nate',
    lastName: 'Cumberland',
    gender: 'male',
    likes: 'chocolate'
  },
  {
    firstName: 'Sue',
    lastName: 'Tremblay',
    gender: 'female',
    likes: 'lemon'
  }
]

class ProfileCard extends React.Component {
  render() {
    let customer = customers[`${this.props.customerId}`]
    return (  
      <div>
        <h2>Name: {this.props.firstName} {this.props.lastName}</h2>
        <h2>Gender: {this.props.gender}</h2>
        <h2>Likes: {this.props.likes}</h2>
      </div>
    );
  };
};

export default ProfileCard;
