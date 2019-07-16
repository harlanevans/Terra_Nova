import React, { Component } from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import axios from 'axios';
import { Image, Segment, Header, Label, Input, Divider, Icon } from 'semantic-ui-react';
import BraintreeDrop from '../braintree/BraintreeDrop';


class MakeReservation extends Component {
  state = { cabin: [], amount: 10 }

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
    const { beds, baths, max_occupancy } = this.props.location.state.cabin

    const { amount } = this.state

    return (
      <>
      <header>
          <h1>Reservation</h1>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </header>
        {/* <Image src={img} /> */}
        <BreadcrumbNav />
       <div class="res">
         <h1>Make Reservation!</h1>
         <center>
          <Image src='https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80' size="medium"/>
         </center>
         <h2>Rooms: {beds}</h2>
         <h2>Baths: {baths}</h2>
         <h2>Max Occupancy: {max_occupancy}</h2>
         {/* <h2>From: {start_date} to: {end_date}</h2> */}
      </div>

      <Segment basic textAlign='center'>
        <Divider horizontal>SUBMIT PAYMENT TO CONTINUE</Divider>
        <Icon name='payment' size='huge'  />
        <br />
        <Label color='black'>Payment Amount</Label>
        <Input value={amount} disabled style={{ fontSize: '18px' }} />
        <BraintreeDrop amount={amount} />
      </Segment>
    </>
    )
  }
}

export default MakeReservation;