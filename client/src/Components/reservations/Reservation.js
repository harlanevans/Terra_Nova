import React, { Component } from 'react';
import ReservationForm from './ReservationForm';

class Reservation extends Component {
  state = { cabins: [] }

  componentDidMount() {
    axios.get("/api/cabins")
    .then( res => {
      this.setState({ cabins: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  addReservation = (cabin) => {
    //axios post to backend
    //add cabin to frontend promise handling
  }

  deleteReservation = (cabin) => {
    //delete in db axios  /api/cabins/${cabin.id}
    //delete in the state
  }

  editReservation = (cabin) => {
    //update in db axios put /api/cabins/${cabin.id}
    //update in state using .map
  }

  renderReservation = () => {
    //show page for reservation
  }

  render() {
    return (
      <> 
      {/* display reservation form */}
      {/* add this to home */}
      </>
    )
  }
}

export default Reservation;