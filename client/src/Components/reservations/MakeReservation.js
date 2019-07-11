import React, { Component } from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import axios from 'axios';


class MakeReservation extends Component {
  state = { cabin: [] }

  // componentDidMount() {
  //   axios.get(`/api/cabins/${cabin.id}`)
  //   .then ( res => {
  //     this.setState( {cabin: res.data })
  //   })
  //   .catch( err=> {
  //     console.log(err);
  //   })
  // }
  
  render() {
    const { cabin } = this.state
    return (
      <>
      <header>
          <h1>Reservation</h1>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </header>
        <BreadcrumbNav />
       <div class="res">
         <h1>Make Reservation!</h1>
      </div>
    </>
    )
  }
}

export default MakeReservation;