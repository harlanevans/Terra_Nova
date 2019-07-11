import React, { Component } from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import Axios from 'axios';
import CabinList from './CabinList';
import Cabin from './Cabin';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

class Rooms extends Component {
  state = { cabins: [] }

  componentDidMount() {
    axios.get('/api/cabins')
    .then( res => {
      this.setState({ cabins: res.data })
    })
    .catch( err => {
      console.log(err);
    })
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