import React, { Component } from 'react';
import axios from 'axios';
import Reservation from './Reservation';
import ReservationForm from './ReservationForm';
import Calendar from 'react-calendar';

class ReservationShow extends Component {
  state = { cabins: [] }

  //  handleClick = (id) => {
  //   const { cabins } = this.state 
  //   this.setState({ 
  //     cabins: cabins.map( cabin => {
  //       if (cabin.id === id) {
  //         return {
  //           ...cabin,
  //           complete: !todo.complete
  //         }
  //       }
  //       return todo
  //     })
  //   })
  // }

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





  render() {
    return (
      <> 
      <ReservationForm />
      <Calendar />
      </>
    )
  }
}

export default ReservationShow;