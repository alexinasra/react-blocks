import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@components/Icon';

const NavCollapse = ({ label, iconName, className, ...props }) => (
  <div className={classnames('nav-link nav-action', className)}>
    <span>
      {iconName && <Icon name={iconName} />}
      <span className="label">{label}</span>
    </span>
  </div>
);

NavCollapse.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  className: PropTypes.string
};
NavCollapse.defaultProps = {
  iconName: undefined,
  className: undefined
};
export default NavCollapse;
