import React, { memo } from 'react';

const Banner = memo(({ text, isAlert }) => (
  <>
    {text && (
      <p className={`${isAlert ? 'my-alert-red' : 'my-alert-green'}`}>{text}</p>
    )}
  </>
));
export default Banner;
