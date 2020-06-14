import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledLabel, StyledContainer } from './FormInputStyles'

const FormInput = ({ label, ...otherProps }) => (
  <StyledContainer>
    <StyledInput {...otherProps} />
    {
      label
        ? <StyledLabel shrink={otherProps.value.length} >
            {label}
          </StyledLabel>
        : null
    }
  </StyledContainer>
);

FormInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default FormInput;