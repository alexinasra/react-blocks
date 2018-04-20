import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@components/Icon';

const NavOuterLink = ({ to, label, iconName, className, ...props }) => (
  <a href={to} target="_blank" className={classnames('nav-link nav-outer_link', className)} {...props}>
    {iconName && <Icon name={iconName} />}
    <span className="label">{label}</span>
  </a>
);

NavOuterLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  className: PropTypes.string
};
NavOuterLink.defaultProps = {
  iconName: undefined,
  className: undefined
};
export default NavOuterLink;
