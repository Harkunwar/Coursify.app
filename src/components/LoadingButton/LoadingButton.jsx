import React from 'react';

import './LoadingButton.scss';

const LoadingButton = (props) => {
  const { stage, children } = props;
  return (
    <button className={stage} {...props} >
      {stage && stage !== STAGE_CLICKED ? null : children}
    </button>
  );
};
  
export const STAGE_CLICKED = 'clicked';
export const STAGE_SUCCESS = 'success';
export const STAGE_FAIL = 'fail';

export default LoadingButton;