/* @flow */
import React from 'react';
import classnames from 'classnames';

type ButtonGroupProps = {
  children: React.Node,
  className?: string,
  [string]: mixed
};

const ButtonGroup = ({ className, ...props }: ButtonProps): React.Node => (
  <div className={classnames('button_group', className)}>
    {props.children}
  </div>
);

export default ButtonGroup;
