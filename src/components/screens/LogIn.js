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
import { connect } from 'react-redux';
import { SignOut } from '../store/actions/authAction';
 

class LoggedLinks extends React.Component {
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
    const {profile} = this.props;
    return (
      <div>
        <Navbar style={{backgroundColor:'rgb(5,30,52)'}} dark expand="md">
          <NavbarBrand href="/" style={{fontWeight:'bold', color:'rgb(243,149,23)'}}>FIREBASE</NavbarBrand>
          <NavbarToggler style={{border:"none"}} onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.props.signOut} href="/" style={{marginRight:'20px'}}>Log Out</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" style={{backgroundColor:'rgb(255,202,42)',padding:'8px',border:'1px solid transparent', borderRadius:'50%', fontWeight:'bold',fontSize:'15px'}} >{profile.initials}</NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(SignOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoggedLinks)