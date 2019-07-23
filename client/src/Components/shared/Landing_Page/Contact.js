import React, { Component } from 'react';
import "../../../styles/Contact.css";
import { Container, Header } from 'semantic-ui-react';


class Contact extends Component {

  render() {
    return (
      <div className="section" style={{ backgroundColor: "#2C533C", paddingBottom: '200px'}}>
  <div className="Contact">
  <Header as='h1' style={{ color: 'white', textAlign: 'center'}}> Contact Us </Header>
  <div style={{ color: "#8A691E", textAlign: 'center'}}>
        <h3> ── ▇ ── </h3>
      </div>
  <div>
  <form action="mailto:someone@example.com?Subject=Hello%20again">
  <label style={{ color: 'white'}}>First Name</label>
  <input className='Contact2' type="text" id="fname" name="firstname" placeholder="Your name.." />
  <label style={{ color: 'white'}}>Last Name</label>
  <input className='Contact2' type="text" id="lname" name="lastname" placeholder="Your last name.." />


  <label style={{ color: 'white'}}>Email</label>
  <input className='Contact2' type="email" id="email" name="email" placeholder="Your email" />


  <label style={{ color: 'white'}}>Subject</label>
  <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
  <input type="submit" value="Submit" />
  </form>
  </div>
  </div>
  </div>
  )
}
}

export default Contact; 
