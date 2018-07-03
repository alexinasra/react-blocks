/* @flow */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Icon from '@components/Icon';

type NavRouterLinkProps = {
  label: string,
  iconName?: string,
  className?: string,
  activeClassName?: string
};

const NavRouterLink = ({
  label,
  iconName,
  className,
  activeClassName,
  ...props
}: NavRouterLinkProps): React.Node => (
  <NavLink activeClassName={classnames('active', activeClassName)}
    className={classnames('nav-link nav-router_link', className)}
    {...props}>
    {iconName && <Icon name={iconName} />}
    <span className="label">{label}</span>
  </NavLink>
);
NavRouterLink.defaultProps = {
  className: undefined,
  iconName: undefined,
  activeClassName: undefined
};


export default NavRouterLink;
