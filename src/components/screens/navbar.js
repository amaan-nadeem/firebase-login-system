import React from 'react';
import LoginLinks from './LoggedIn';
import LoggedLinks from './LogIn';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const {userId} = props;
  const links = userId ? <LoggedLinks/> : <LoginLinks/>; 
  console.log(props);
    return(
        <React.Fragment>
          {links}
        </React.Fragment>

    )
}
const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid
  }
}
export default connect(mapStateToProps)(Navbar);