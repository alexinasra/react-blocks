/* @flow */
import React from 'react';
import classNames from 'classnames';

type SubheaderProps = {
  className?: string,
  children: React.Node
};
const Subheader = ({ className, ...props }: SubheaderProps): React.Node => (
  <span className={classNames('subheader', className)} {...props}>{props.children}</span>
);

Subheader.defaultProps = {
  className: undefined
};

export default Subheader;
