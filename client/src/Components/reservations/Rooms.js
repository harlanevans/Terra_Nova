import React, { Component } from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import Axios from 'axios';
import CabinList from './CabinList';
import Cabin from './Cabin';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

class Rooms extends Component {
  state = { cabins: [], reservations: [], cabinsWithRes: [], amount: 10 }

  //do get request for reservations $ map reservations in render
  componentDidMount() {

        axios.get(`/api/cabins`)
      .then(res => {
        this.setState({ cabins: res.data })
      })
      .catch(err => {
        console.log(err);
      })
      this.renderStuff()


    axios.get(`/api/reservations`)
      .then(res => {
        this.setState({ reservations: res.data })
      })
      .catch(err => {
        console.log(err);
      })

 
  }

  

  renderReservations = () => {
    const { reservations } = this.state;
    return(<div>
   {reservations.map(r => (
     <div style={{fontSize: "1em", padding: '2em'}}>
          {r.start_date}
        </div>
     
     )
     )}
     </div>
     )
  }

  renderStuff = () => {
    const {reservations} = this.state
    const { to, from } = this.props.location.state
    const cabins = reservations.filter(reservation => {

      if (reservation.start_date === from)
        return cabins
      return 0
    })
    this.setState({ cabins: [...cabins] })
  }

  render() {
    const { cabins } = this.state
    return (
      <>
        <header>
          <h1>Reservation</h1>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </header>
        <BreadcrumbNav />
            {this.renderReservations()}
        <Container>
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