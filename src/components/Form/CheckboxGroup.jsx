/* @flow */
import React from 'react';
import classnames from 'classnames';

type CheckboxGroupProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};

const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps): React.Node => (
  <div className={classnames('checkbox_group', className)} role="group">
    {props.children}
  </div>
);

CheckboxGroup.defaultProps = {
  className: undefined
};
export default CheckboxGroup;
