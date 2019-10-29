import React from 'react';
import { connect } from 'react-redux';


const Home = (props) => {
    console.log(props);
return (
    <div>
        <p>This is Home Logged in Screen...</p>
    </div>
)
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(Home);