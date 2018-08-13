import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from './MaterialIcon';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Topbar extends Component{
  state = {
    isOpen: false
  }
  toggle = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    const {isAuth, user} = this.props;
    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <Link to="/" className="navbar-brand">BookSharingApp</Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
           { isAuth || 
            <Fragment>
              <NavItem>
                <Link to="/login" className="nav-link">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/signup" className="nav-link">Signup</Link>
              </NavItem>
            </Fragment>
           }{ isAuth &&
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {user.name}
                </DropdownToggle>
              <DropdownMenu right>
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <DropdownItem divider />
                <Link to="/logout" className="dropdown-item">Logout</Link>
              </DropdownMenu>
            </UncontrolledDropdown>
           }
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}