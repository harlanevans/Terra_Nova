import React, { Component } from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import Axios from 'axios';
import CabinList from './CabinList';
import Cabin from './Cabin';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

class Rooms extends Component {
  state = { cabins: [], reservations: [], filterRes: [], amount: 10, showRes: false }

  //do get request for reservations $ map reservations in render
  componentDidMount() {

        axios.get(`/api/cabins`)
      .then(res => {
        this.setState({ cabins: res.data })
      })
      .catch(err => {
        console.log(err);
      })
 
      


    axios.get(`/api/reservations`)
      .then(res => {
        this.setState({ reservations: res.data })
      })
      .catch(err => {
        console.log(err);
      })
           this.filterReservations()

 
  }

  toggleRes = ()  => {
    const {showRes } = this.state;
    this.setState({showRes: !showRes})
    console.log(showRes)
  }

  

  renderReservations = () => {
    const { reservations } = this.state;
    return(<div>
      
   {reservations.map(r => (
     <div style={{fontSize: "1em", padding: '2em'}}>
          Start: {r.start_date} <br />
          End: {r.end_date} <br />
          Cabin id: {r.cabin_id} <br />
        </div>
     
     )
     )}
     </div>
     )
  }

  filterReservations = () => {
    const {filterRes, reservations} = this.state
    const { to, from } = this.props.location.state


    for (let i = 0; i < reservations.length; i++) {
      if (from < reservations[i].start_date)
        return reservations[i]
      return 0
    }
    this.setState({ filterRes })
          
    }

  //  reservations.map(r => {

      // if (from < reservation.start_date && to > reservation.start_date && to < reservation.end_date && from < reservation.end_date)

    //   console.log(from)
    //   console.log(to)
    //   if (from < r.start_date)
    //     return r
    //   return 0
    // })
    // this.setState({ filterRes })
    // console.log(filterRes)
  

  render() {
    const { cabins } = this.state
    return (
      <>
        <header>
          <h1>Reservation</h1>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </header>
        <BreadcrumbNav />
        <Container>
{/* 
          {this.renderReservations()}
        <button onClick={this.toggleRes}>

            Click me!
        </button>
          <button onClick={this.filterReservations}>

            Test Filter
        </button>
        {this.state.showRes ? (
          
          <div>test{() => this.filterReservations()}</div>
        )
      : (
        <div>Not working</div>
      )} */}


          <div class="roomh1">
            <h1>Available Rooms</h1>
            <CabinList
              cabins={cabins}
              />
          </div>
        </Container>
      </>
    )
  }
}


export default Rooms;