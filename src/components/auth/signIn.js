import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './login.css';
import { connect } from 'react-redux';
import {SignUp} from '../store/actions/authAction';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class NormalLoginForm extends React.Component {
    state = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        remember: ''
    }
   handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields ( async (err, values) => {
      if (!err) {
         await this.setState({
              email: values.email,
              password: values.password,
              firstname: values.firstname,
              lastname: values.lastname,
              remember: values.remember
            })
        }
        console.log('Received values of form: ', this.state);
      });
      this.props.user(this.state);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {userId} = this.props;
    if(userId) return <Redirect to="/home"/>
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
          <h1 style={{textAlign:'center', fontSize:'35px',color:'rgb(64,169,255)', fontWeight:'bold'}}>Sign Up</h1>
        <Form.Item>
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='text'
              placeholder="firstname"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='text'
              placeholder="Lastname"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your Email Address!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='email'
              placeholder="email address"
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
          Or <Link to="/">Login Form!</Link>
        </Form.Item>
        {this.props.auth ? <p style={{textAlign:'center', color:'red'}}>{this.props.auth}</p> :<></> }
      </Form>
    );
  }
}

const SignUpForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
const mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid,
        auth: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        user: user => dispatch(SignUp(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);