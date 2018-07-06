/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type DividerProps = {
  className?: string,
  shadow?: boolean
};

const Divider = ({ className, shadow, ...props }: DividerProps): Node => (
  <div className={classNames('divider', { 'has-shadow': shadow }, className)} {...props}>
    {shadow && <div className="shadow-box" />}
  </div>
);
Divider.defaultProps = {
  className: undefined,
  shadow: false
};

export default Divider;
