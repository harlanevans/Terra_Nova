import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';
import axios from 'axios';
import Reservation from './Reservation';
import {Grid} from 'semantic-ui-react';
import Calendar from 'react-calendar';

class ReservationForm extends Component {
  state= { rooms: '1', start_date: new Date(), end_date: new Date(), 
   kids: 0, adults: 0}

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  // componentDidMount() {
  //   axios.post('/api/cabins')
  //   .then( res => {
  //     const { cabins } = this.state
  //       this.setState({ cabins: [...cabins, res.data ]})
  //   })
  //   .catch( err => {
  //     console.log(err)
  //   })
  // }

  handleCalendar = range => {
    this.setState({
      reservation: {
        ...this.state.reservation,
        start_date: range[0],
        end_date: range[1]
      }
    });
  };

  addReservation = (cabin) => {
    //axios post to backend
    axios.post('/api/cabins', { cabin })
    //add cabin to frontend promise handling
    .then( res => {
      const { rooms } = this.state
      this.setState({ rooms: [...rooms, res.data ]})
    })
    .catch( err => {
      console.log(err)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { add } = this.props
    add(this.state)
    //clear form
    this.setState({ rooms: '', start_date: '', end_date: ''
    , kids: '', adults: ''})
  }

// renderReservation = () => {
//     //show page for reservation
//     const { rooms } = this.state
//     return rooms.map (cabin => <Reservation key={cabin.id} {...cabin} remove={this.deleteReservation} />)
//   }

  render() {
    const {rooms, start_date, end_date, kids, adults } = this.state
    return (
      <>
      <Grid columns={3}>
      <Grid.Row centered>
      <Grid.Column width={4}>
      <Form onSubmit={this.handleSubmit}
      className="form"
      size={"small"}
      widths={"equal"}
      >
      <Divider horizontal>Your Reservation</Divider>
      <div class="gold-label">
        <label>Your Stay Dates</label>
        </div>
        <Form.Field>
          <div class="label-div">
          <label>Arrive</label><br />
          <input 
            placeholder="todays date" 
            type="date" 
            name="start_date"
            value={start_date}
            onChange={this.handleChange}
            />
          </div>
        </Form.Field>
        <Form.Field>
        <div class="label-div">
          <label>Night</label><br />
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          </div>
        </Form.Field>
        <Form.Field>
        <div class="label-div">
          <label>Departure</label><br />
          <input 
            placeholder="leave date" 
            type="date"
            name="end_date"
            value={end_date}
            onChange={this.handleChange}/>
          </div>
        </Form.Field>
        <div class="gold-label">
        <label>Rooms and Guest</label>
        </div>
        <Form.Field>
        <div class="label-div">
          <label>Rooms</label><br />
          <select 
            onChange={this.handleChange}
            name="rooms"
            value={rooms}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          </div>
        </Form.Field>
        <Form.Field>
        <div class="label-div">
          <label>Room 1</label>
          <span style={styles.flex_select}>
          Adults
          <select 
            name="adults" 
            id="adult" 
            value={adults}
            onChange={this.handleChange}
            >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          Kids
          <select 
            name="kids" 
            id="child" 
            value="kids"
            onChange={this.handleChange}
            >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          </span>
          </div>
        </Form.Field>
        <Form.Field>
        <div class="label-div">
          <label>Room 2</label>
          <span style={styles.flex_select}>
          Adults
          <select 
            name="adults" 
            id="adult" 
            value={adults}
            onChange={this.handleChange}
            >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          Kids
          <select 
            name="kids"
            value={kids}
            id="child" 
            onChange={this.handleChange}
            >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          </span>
          </div>
        </Form.Field>
        <Form.Field>
          <div class="button-div">
          <button 
            class="button" 
            onClick=""
            >
            Check Available</button>
          </div>
        </Form.Field>
      </Form>
      </Grid.Column>
      <Grid.Column width={4}>
       <Calendar 
         onChange={this.handleCalendar}
         value={[start_date, end_date]}
         selectRange
         minDate={new Date()}
       />
      </Grid.Column>
      <Grid.Column width={4}>
       <Calendar />
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </>
    )
  }
}

export default ReservationForm;

const styles = {
  flex_select: {
    display: 'flex',
    flexDirection: 'row'
  },
  more: {

  }
}