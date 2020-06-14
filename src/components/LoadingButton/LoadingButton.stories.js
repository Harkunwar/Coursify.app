import React from 'react';
import { action } from '@storybook/addon-actions';
import LoadingButton from './LoadingButton';
import { setTimeoutAsync } from '../../utils/utils';
import PropTypes from 'prop-types';

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
    const { valid } = this.props;
    await this.setStateAsync({
      stage: 'clicked',
    });

    await setTimeoutAsync(2000);
    action(valid ? 'success' : 'fail')();
    await this.setStateAsync({
      stage: valid ? 'success' : 'fail',
    });

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

export const ValidButton = () => <LoadingButtonTest valid name={'Valid Button'} />;

export const InvalidButton = () => <LoadingButtonTest  name={'Invalid Button'} />;

