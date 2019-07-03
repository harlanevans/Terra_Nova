import React, { Component } from 'react';
import axios from 'axios';
import Reservation from './Reservation';
import ReservationForm from './ReservationForm';

class ReservationShow extends Component {
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

  deleteReservation = (cabin) => {
    //delete in db axios  /api/cabins/${cabin.id}
    axios.delete(`/api/cabins/${cabin.id}`)
    .then( res => {
      const { cabins } = this.state
      this.setState({ cabins: cabins.filter(p => p.id !== cabin.id)})
    })
  }

  editReservation = (cabin) => {
    //update in db axios put /api/cabins/${cabin.id}
    axios.put(`/api/cabins/${cabin.id}`, { cabin })
    //update in state using .map
    .then( res => {
      const cabins = this.state.cabins.map( p => {
        if (p.id === cabins.id)
        return res.data
        return p
      })
      this.setState({ cabins })
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderReservation = () => {
    //show page for reservation
    const { cabins } = this.state
    return cabins.map (cabin => <Reservation key={cabin.id} {...cabin} remove={this.deleteReservation} />)
  }

  render() {
    return (
      <> 
      <h1>Your Reservation</h1>
      <ReservationForm add={this.addReservation} />
      {this.renderReservation()}
      </>
    )
  }
}

export default ReservationShow;