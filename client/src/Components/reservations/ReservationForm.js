import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';

class ReservationForm extends Component {
  render() {
    return (
      <>
      <Form className="form"
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
          <input placeholder="todays date"/>
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
          <input placeholder="leave date"/>
          </div>
        </Form.Field>
        <div class="gold-label">
        <label>Rooms and Guest</label>
        </div>
        <Form.Field>
        <div class="label-div">
          <label>Rooms</label><br />
          <select>
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
          <select name="adult" id="adult">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          Kids
          <select name="child" id="child">
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
          <select name="adult" id="adult">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          Kids
          <select name="child" id="child">
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