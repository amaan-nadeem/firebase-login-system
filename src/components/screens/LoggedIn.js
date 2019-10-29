import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class LoginLinks extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:'rgb(5,30,52)'}} dark expand="md">
          <NavbarBrand href="/" style={{fontWeight:'bold', color:'rgb(243,149,23)'}}>FIREBASE</NavbarBrand>
          <NavbarToggler style={{border:"none"}} onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Login</NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

