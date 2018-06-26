/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import CssClassToggle from '@hocs/CssClassToggle';

const Demo = props => (
  <div role="button" tabIndex={0} onClick={() => console.log('clicked')} {...props}>
    demo
  </div>
);

export default CssClassToggle('onMouseOver', 'onMouseOut', 'demo-active', 'demo-unactive')(Demo);
