import React, { Component } from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import axios from 'axios';
import { Image, Segment, Header, Label, Input, Divider, Icon, Card } from 'semantic-ui-react';
import BraintreeDrop from '../braintree/BraintreeDrop';


class MakeReservation extends Component {
  state = { amount: this.props.location.price }
  render() {

    const { beds, baths, max_occupancy, price, image, description } = this.props.location.state.cabin

    const { amount } = this.state

    return (
      <>
        <header>
          <h1>Reservation</h1>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </header>
        {/* <Image src={img} /> */}
        <BreadcrumbNav />
        <div class="resh1">
          <h1>Make Reservation!</h1>
        </div>
        <div class="res">
          <Card>
            <Image src={image} size="medium" />
            <Card.Content>
              <Card.Description>{description}</Card.Description>
              <h4>Rooms:{beds}</h4>
              <h4>Baths:{baths}</h4>
              <h4>Max Occupancy:{max_occupancy}</h4>
            </Card.Content>
            <Card.Content extra>
              Starting: ${price}/day
          </Card.Content>
          </Card>
          {/* <h2>From: {start_date} to: {end_date}</h2> */}
        </div>

        <Segment basic textAlign='center'>
          <Divider horizontal>SUBMIT PAYMENT TO CONTINUE</Divider>
          <Icon name='payment' size='huge' />
          <br />
          <Label color='black'>Payment Amount</Label>
          <Input value={price} disabled style={{ fontSize: '18px' }} />
          <BraintreeDrop amount={price} />
        </Segment>
      </>
    )
  }
}

export default MakeReservation;