import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

const NavAction = ({ label, iconName, className, ...props }) => (
  <a className={classnames('nav-link nav-action', className)} {...props}>
    {iconName && <Icon name={iconName} />}
    <span className="label">{label}</span>
  </a>
);

NavAction.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  className: PropTypes.string
};
NavAction.defaultProps = {
  iconName: undefined,
  className: undefined
};
export default NavAction;
