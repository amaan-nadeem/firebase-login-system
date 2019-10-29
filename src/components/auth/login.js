import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions/authAction';
import {Redirect} from 'react-router-dom';

class NormalLoginForm extends React.Component {
    state = {

    }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
            ...values
        })
        this.props.user(values);
      }
    });
    
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {userId} = this.props;
    if(userId) return <Redirect to="/home"/>
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
          <h1 style={{textAlign:'center', fontSize:'35px',color:'rgb(64,169,255)', fontWeight:'bold'}}>Login Form</h1>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username or email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email"
              placeholder="Username or Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" style={{display:'block',width:'100%'}} className="login-form-button">
            Log in
          </Button>
          Or <Link to='/signup'>register now!</Link>
        </Form.Item>
        {this.props.auth ? <p style={{textAlign:'center', color:'red'}}>{this.props.auth}</p> :<></> }
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
const mapStateToProps = (state) =>{
    return {
        auth: state.auth.authError,
        userId: state.firebase.auth.uid
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        user: user => dispatch(login(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);