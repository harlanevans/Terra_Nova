import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import DayPick, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

class ReservationForm extends Component {
  state = {
    rooms: '1', to: '', from: '',
    kids: 0, adults: 0
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
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

  // handleCalendar = range => {
  //   this.setState({
  //     reservation: {
  //       ...this.state.reservation,
  //       start_date: range[0],
  //       end_date: range[1]
  //     }
  //   });
  // };

  addReservation = (cabin) => {
    //axios post to backend
    axios.post('/api/cabins', { cabin })
      //add cabin to frontend promise handling
      .then(res => {
        const { rooms } = this.state
        this.setState({ rooms: [...rooms, res.data] })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { add } = this.props
    // add(this.state)
    //clear form
    this.setState({
      rooms: '1', start_date: '', end_date: ''
      , kids: '', adults: ''
    })
  }


  // renderReservation = () => {
  //     //show page for reservation
  //     const { rooms } = this.state
  //     return rooms.map (cabin => <Reservation key={cabin.id} {...cabin} remove={this.deleteReservation} />)
  //   }

  roomsWindow = () => {
    window.location.assign('/rooms')
  }

  render() {
    const { rooms, start_date, end_date, kids, adults } = this.state
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
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
                  <div className="InputFromTo">
                    <DayPickerInput
                      value={from}
                      placeholder="From"
                      format="LL"
                      formatDate={formatDate}
                      parseDate={parseDate}
                      dayPickerProps={{
                        selectedDays: [from, { from, to }],
                        disabledDays: { after: to },
                        toMonth: to,
                        modifiers,
                        numberOfMonths: 2,
                        onDayClick: () => this.to.getInput().focus(),
                      }}
                      onDayChange={this.handleDayClick}
                      onClick={this.handleResetClick}
                    />{' '}
                    {/* <div class="label-div">

          <input 
            placeholder="todays date" 
            type="date" 
            name="start_date"
            value={start_date}
            onChange={this.handleChange}
            /> */}
                  </div>
                </Form.Field>
                {/* <Form.Field>
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
        </Form.Field> */}
                <div class="gold-label">
                  <label>Departure</label><br />
                </div>
                <Form.Field>
                  {' '}
                  <span className="InputFromTo-to">
                    <DayPickerInput
                      ref={el => (this.to = el)}
                      value={to}
                      placeholder="To"
                      format="LL"
                      formatDate={formatDate}
                      parseDate={parseDate}
                      dayPickerProps={{
                        selectedDays: [from, { from, to }],
                        disabledDays: { before: from },
                        modifiers,
                        month: from,
                        fromMonth: from,
                        numberOfMonths: 2,
                      }}
                      onDayChange={this.handleDayClick}
                      onClick={this.handleResetClick}
                    />
                  </span>
                  <button className="link" onClick={this.handleResetClick}>
                    Reset
                  </button>

                  {/* <input 
            placeholder="leave date" 
            type="date"
            name="end_date"
            value={end_date}
            onChange={this.handleChange}/> */}
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
                      onClick={this.roomsWindow}
                    >
                      Check Available</button>
                  </div>
                </Form.Field>
              </Form>
            </Grid.Column>
            {/* <Grid.Column width={4}> */}

            <DayPick
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              numberOfMonths={2}
              onDayClick={this.handleDayClick}
            />


            {/* <Calendar 
         numberOfMonths={2}
         onChange={this.handleCalendar}
         value={[start_date, end_date]}
         selectRange
        minDate={new Date()} */}
            {/* /> */}
            {/* </Grid.Column> */}
            {/* <Grid.Column width={4}> */}
            {/* <Calendar /> */}
            {/* </Grid.Column> */}
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

