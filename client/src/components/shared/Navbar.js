import React, { Component } from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { HashLink } from 'react-router-hash-link';


class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout }, location, history } = this.props

    if (user) {
      return(
        
          <Link to='/'
            name='logout'
            onClick={() => handleLogout(history)}
          >Logout</Link>
      )
    } else {
      return(
        <>
        <div className="navbar">
          <ul>
            <li>
          <Link to='/login'
              name='login'
              id='login'
              // active={location.pathname === '/login'}
            >Login</Link>
            </li>
              <li>
          <Link to='/register'
              name='register'
              id='register'
              // active={location.pathname === '/register'}
            >Register</Link>
            </li>
          </ul>
      </div>
        </>
      )
    }
  }

  render() {
    return(
      <Menu secondary className="navbar">
        <Container>
        <Menu.Item className="navbar_item">
          <Image src = '../../../images/TN_horizontal_white_transparent-p-500.png' size='tiny'/>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#home">HOME</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#room_rate">ROOM & RATE</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <Link to="/reservation">RESERVATION</Link>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#gallery">GALLERY</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#about">ABOUT</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <Link to="/contact">CONTACT</Link>
        </Menu.Item>
        </Container>
      </Menu>

    )
  }
}

export class ConnectedNavbar extends Component {
  render() {
    return(
      <AuthConsumer>
        { value =>
          <Navbar {...this.props} auth={value} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);