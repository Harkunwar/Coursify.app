import React from 'react';

class LoginPage extends React.Component {

  handleSubmit = () => {
    alert('Login');
  }

  render() {
    return (
      <div className='login-page'>
        <form onSubmit={this.handleSubmit} >
          <label>Email</label>
          <input className='email' type='text' />
          <label>Password</label>
          <input className='password' type='password' />
          <button type='submit'>Sign in</button>
        </form> 
      </div>
    );
  }

}

export default LoginPage;