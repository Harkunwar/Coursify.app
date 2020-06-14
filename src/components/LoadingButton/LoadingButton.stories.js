import React from 'react';
import { action } from '@storybook/addon-actions';
import LoadingButton, { STAGE_CLICKED, STAGE_SUCCESS, STAGE_FAIL } from './LoadingButton';
import { setTimeoutAsync } from '../../utils/utils';

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
    action(STAGE_CLICKED)
    const { valid } = this.props;
    await this.setStateAsync({
      stage: STAGE_CLICKED,
    });

    await setTimeoutAsync(2000);
    action(valid ? STAGE_SUCCESS : STAGE_FAIL)
    await this.setStateAsync({
      stage: valid ? STAGE_SUCCESS : STAGE_FAIL,
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

export const ValidButton = () => <LoadingButtonTest valid name={'Valid Button'} />;

export const InvalidButton = () => <LoadingButtonTest name={'Invalid Button'} />;

