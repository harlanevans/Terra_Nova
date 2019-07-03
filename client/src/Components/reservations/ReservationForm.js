import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';
import axios from 'axios';
import Reservation from './Reservation';
class ReservationForm extends Component {
  state= { cabins: '', start_date: '', end_date: '', 
   kids: '', adults: ''}

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

  handleSubmit = (e) => {
    e.preventDefault();
    const { add } = this.props
    add(this.state)
    //clear form
    this.setState({ cabins: '', start_date: '', end_date: ''
    , kids: '', adults: ''})
  }

renderReservation = () => {
    //show page for reservation
    const { cabins } = this.state
    return cabins.map (cabin => <Reservation key={cabin.id} {...cabin} remove={this.deleteReservation} />)
  }

  render() {
    return (
      <>
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
          <input placeholder="todays date" onChange={this.handleChange}/>
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
          <input placeholder="leave date" onChange={this.handleChange}/>
          </div>
        </Form.Field>
        <div class="gold-label">
        <label>Rooms and Guest</label>
        </div>
        <Form.Field>
        <div class="label-div">
          <label>Cabins</label><br />
          <select onChange={this.handleChange}>
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
          <select name="adult" id="adult" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          Kids
          <select name="child" id="child" onChange={this.handleChange}>
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
          <select name="adult" id="adult" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          Kids
          <select name="child" id="child" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          </span>
          </div>
        </Form.Field>
        <Form.Field>
          <div class="button-div">
          <button class="button">Check Available</button>
          </div>
        </Form.Field>
      </Form>
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