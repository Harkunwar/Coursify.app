import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.scss';


const FormInput = ({ label, ...otherProps }) => (
  <div className='form-input-div'>
    <input className='form-input' {...otherProps} />
    {
      label
        ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
          {label}
        </label>
        : null
    }
  </div>
);

FormInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default FormInput;