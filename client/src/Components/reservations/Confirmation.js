import React from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import { Segment, Header } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';


const Confirmation = ({ location: { state } }) => {
 
  console.log(state)
  if(state && state.transactionId)
  return (

    <>
      <header>
        <h1>Reservation</h1>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
      </header>
      <BreadcrumbNav />
    <Segment basic textAlign='center'>
        <Header as='h1' color='green'>Thank You For Choosing Terra Nova Cabins</Header>
        <p>You have been successfully charged: ${state.amount}</p>
        <p>Your Transcation Id is: {state.transactionId}</p>
        <Link to='/'>Link To Home Page</Link>
      </Segment>
  </>
)
else
return(<Redirect to='/' />);
}

export default Confirmation;