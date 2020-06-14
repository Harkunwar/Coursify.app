import React from 'react';
import { auth } from '../firebase/auth'

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    console.log(email, password);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  }


  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='login-page'>
        <form onSubmit={this.handleSubmit} >
          <label>Email</label>
          <input className='email' type='text' onChange={this.handleChange} name='email' />
          <label>Password</label>
          <input className='password' type='password' name='password' onChange={this.handleChange} />
          <button type='submit'>Sign in</button>
        </form>
      </div>
    );
  }

}

export default LoginPage;