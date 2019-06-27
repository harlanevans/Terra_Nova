import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { HashLink as Link } from 'react-router-hash-link';


class Navbar2 extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout }, location, history } = this.props

    if (user) {
      return(
        
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(history)}
          />
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />
          </Link>

        </Menu.Menu>
      )
    }
  }

  render() {
    return(
      <div>
        <Menu secondary pointing>
          <Link to='/'>
            <Menu.Item 
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link smooth to="/#hash">
            <Menu.Item
              name='hash'
              id='hash'
              active={this.props.location.pathname === '/#hash'}
            />
          </Link>
          { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends Component {
  render() {
    return(
      <AuthConsumer>
        { value =>
          <Navbar2 {...this.props} auth={value} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);