import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import axios from 'axios';

class BraintreeDrop extends Component {
  state = {
    braintree: 
    { 
    loaded: false, 
    token: '',
    redirect: false,
    transactionId: '',
  },
  cabins: []
};

  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.state.cabins

    axios.get(`/api/cabins/${id}/braintree_token`)
      .then( res => {
        const { data: token } = res;
        this.setState({ token, loaded: true });
      })
      .catch( res => {
        console.log('Error Setting Up Payments. Try Again!')
    });
  }
  
  handlePaymentMethod = (payload) => {
    const { dispatch, amount } = this.props;
    const { id } = this.state.cabins

    axios.post(`/api/cabins/${id}/payment`, { amount, ...payload })
      .then(res => {
        const { data: transactionId } = res;
        this.setState({ redirect: true, transactionId });
      })
      .catch(res => {
        console.log('Error Posting Payment. Try Again!')
        window.location.reload();
    });
  }

  render () {
    const { loaded, token, redirect, transactionId } = this.state;

    if(redirect)
      return(
        <Redirect to={{
          pathname: '/confirmation',
          state: { amount: this.props.amount, transactionId }
        }}/>
      );
    if(loaded)
      return (
        <Segment basic textAlign='center'>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Segment>
      );
    else
      return(
        <Dimmer active>
          <Loader>Loading Payment Experience. Please Wait...</Loader>
        </Dimmer>
      )
  }
}

export default BraintreeDrop;