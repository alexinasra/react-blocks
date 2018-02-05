import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Icon from '../Icon';

const NavRouterLink = ({ label, iconName, className, activeClassName, ...props }) => (
  <NavLink activeClassName={classnames('active', activeClassName)}
    className={classnames('nav-link nav-router_link', className)}
    {...props}>
    {iconName && <Icon name={iconName} />}
    <span className="label">{label}</span>
  </NavLink>
);

NavRouterLink.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string
};
NavRouterLink.defaultProps = {
  iconName: undefined,
  className: undefined,
  activeClassName: undefined
};

export default NavRouterLink;
