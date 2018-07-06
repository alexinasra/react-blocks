/* @flow */
import React from 'react';
import classnames from 'classnames';

type MenuProps = {
  children: React.Node,
  className?: string,
  [string]: mixed
};
const Menu = ({ className, children, ...props }: MenuProps): React.Node => (
  <div className={classnames('menu', className)} {...props}>
    {children}
  </div>
);

Menu.defaultProps = {
  className: undefined
};
export default Menu;
