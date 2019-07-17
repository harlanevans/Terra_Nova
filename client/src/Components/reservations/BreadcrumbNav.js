import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BreadcrumbNav extends Component {
  state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div class="topnav">
        <Link to="/reservation"
          // name="reservation" 
          active={activeItem === "reservation"}
          onClick={this.handleItemClick}><strong>1. </strong>Choose Date</Link>
        <Link to="/rooms"
          // name="room" 
          active={activeItem === "room"}
          onClick={this.handleItemClick}><strong>2. </strong>Choose Room</Link>
        <Link to="/makereservation"
          // name="makereservation" 
          active={activeItem === "makereservation"}
          onClick={this.handleItemClick}><strong>3. </strong>Make Reservation</Link>
        <Link to="/confirmation"
          // name="confirmation"
          active={activeItem === "confirmation"}
          onClick={this.handleItemClick}><strong>4. </strong>Confirmation</Link>
      </div >
    )
  }
}

export default BreadcrumbNav;