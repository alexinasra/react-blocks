/* @flow */
import React from 'react';
import classNames from 'classnames';

type SubheaderProps = {
  className?: string,
  children: React.Node
};
const Subheader = ({ className, children, ...props }: SubheaderProps): React.Node => (
  <span className={classNames('subheader', className)} {...props}>
    {children}
  </span>
);

Subheader.defaultProps = {
  className: undefined
};

export default Subheader;
