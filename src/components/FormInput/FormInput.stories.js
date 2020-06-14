import React from 'react';
import { action } from '@storybook/addon-actions';
import FormInput from './FormInput';
import PropTypes from 'prop-types';

export default {
  title: 'Form Input',
  component: FormInput,
};

class FormInputTest extends React.Component {

  state = {
    value: '',
  }

  handleChange = event => {
    const { value } = event.target;
    action('change')(value);
    this.setState({
      value,
    });
  };

  render() {
    return <FormInput
      onChange={this.handleChange}
      {...this.props}
      value={this.state.value}
      style={{width: '300px'}}
    />
  }

}

FormInputTest.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

export const WithLabel = () => <FormInputTest label='Email' type='email' />;

export const Password = () => <FormInputTest label='Password' type='password' />;

export const Number = () => <FormInputTest label='Phone Number' type='number' />;

export const WithoutLabel = () => <FormInputTest />;

