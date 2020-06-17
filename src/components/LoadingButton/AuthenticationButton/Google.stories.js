import React from 'react';
import { action } from '@storybook/addon-actions';
import LoadingButton from '../LoadingButton';
import { setTimeoutAsync } from '../../../utils/utils';
import PropTypes from 'prop-types';

import { signInWithGoogle, signInWithFacebook } from '../../../firebase/auth'

export default {
  title: 'Loading Button',
  component: LoadingButton,
};

class LoadingButtonTest extends React.Component {

  constructor() {
    super();
    this.state = {
      stage: null,
    }
  }

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  handleClick = async () => {
    action('clicked')();
    await this.setStateAsync({
      stage: 'clicked',
    });
  
    try {
      let result = null;
      if (this.props.type === 'Google') {
        result = await signInWithGoogle();
      } else if (this.props.type === 'Facebook') {
        result = await signInWithFacebook();
      }
      console.log(result);
      await this.setStateAsync({
        stage: 'success'
      });
    } catch(error) {
      console.error(error);
      await this.setStateAsync({
        stage: 'fail'
      });
    }
  
    await setTimeoutAsync(500);
    await this.setStateAsync({
      stage: null,
    });
  }

  render() {
    return <LoadingButton stage={this.state.stage} onClick={this.handleClick}>{this.props.name}</LoadingButton>;
  }

}

LoadingButtonTest.propTypes = {
  name: PropTypes.string.isRequired,
  valid: PropTypes.bool,
}

export const GoogleButton = () => <LoadingButtonTest name={'Sign in with Google'} type={'Google'} />;

export const FacebookButton = () => <LoadingButtonTest name={'Sign in with Facebook'} type={'Facebook'} />;

