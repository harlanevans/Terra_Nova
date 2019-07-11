import React, { Component } from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

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
        onClick={this.handleItemClick}>Choose Date</Link>
        <Link to="/rooms"
        // name="room" 
        active={activeItem === "room"}
        onClick={this.handleItemClick}>Choose Room</Link>
        <Link to="/makereservation"
        // name="makereservation" 
        active={activeItem === "makereservation"}
        onClick={this.handleItemClick}>Make Reservation</Link>
        <Link to="/confirmation"
        // name="confirmation"
         active={activeItem === "confirmation"}
        onClick={this.handleItemClick}>Confirmation</Link>
      </div>
    )
  }
}

export default BreadcrumbNav;