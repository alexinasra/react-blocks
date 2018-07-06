/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type CheckboxGroupProps = {
  className?: string,
  children: Node,
  [string]: mixed
};

const CheckboxGroup = ({ className, children, ...props }: CheckboxGroupProps): Node => (
  <div className={classnames('checkbox_group', className)} role="group" {...props}>
    {children}
  </div>
);

CheckboxGroup.defaultProps = {
  className: undefined
};
export default CheckboxGroup;
