import React, { Component } from 'react';
import "../../../styles/Contact.css";


class Contact extends Component {

render() {
  return (
  <div className="Contact">
  <p>Contact Us</p>
  <div>
  <form action="mailto:someone@example.com?Subject=Hello%20again">
  <label>First Name</label>
  <input className='Contact2' type="text" id="fname" name="firstname" placeholder="Your name.." />
  <label>Last Name</label>
  <input className='Contact2' type="text" id="lname" name="lastname" placeholder="Your last name.." />


  <label>Email</label>
  <input className='Contact2' type="email" id="email" name="email" placeholder="Your email" />


  <label>Subject</label>
  <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
  <input type="submit" value="Submit" />
  </form>
  </div>
  </div>
  )
}
}

export default Contact; 
