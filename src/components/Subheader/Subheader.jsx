/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type SubheaderProps = {
  className?: string,
  children: Node
};
const Subheader = ({ className, children, ...props }: SubheaderProps): Node => (
  <span className={classNames('subheader', className)} {...props}>
    {children}
  </span>
);

Subheader.defaultProps = {
  className: undefined
};

export default Subheader;
