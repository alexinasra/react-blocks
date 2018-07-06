/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type ButtonGroupProps = {
  children: Node,
  className?: string,
  [string]: mixed
};

const ButtonGroup = ({ className, children, ...props }: ButtonGroupProps): Node => (
  <div className={classnames('button_group', className)} {...props}>
    {children}
  </div>
);
ButtonGroup.defaultProps = {
  className: undefined
};

export default ButtonGroup;
