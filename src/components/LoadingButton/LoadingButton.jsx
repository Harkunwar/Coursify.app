import React from 'react';
import PropTypes from 'prop-types';

import './LoadingButton.scss';

const LoadingButton = props => {
  const { stage, children } = props;

  return (
    <button className={stage} {...props} >
      {stage && stage !== 'clicked' ? null : children}
    </button>
  );
};

LoadingButton.propTypes = {
  onClick: PropTypes.func,
  stage: PropTypes.oneOf(['clicked', 'fail', 'success']),
}

export default LoadingButton;