/* @flow */
import React from 'react';
import classnames from 'classnames';

type NavProps = {
  children: React.Node,
  className?: string,
  direction: 'row' | 'column',
  [string]: mixed
};

const Nav = ({ direction, className, ...props }: NavProps): React.Node => (
  <div className={classnames('nav', direction, className)} {...props}>
    {props.children}
  </div>
);
Nav.defaultProps = {
  className: undefined
};

export default Nav;
