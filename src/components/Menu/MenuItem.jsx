import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@components/Icon';

const MenuItem = ({ label, iconName, shortcut, className, ...props }) => (
  <div tabIndex={0} role="menuitem" className={classnames('menu-item', className)} {...props}>
    {iconName && <Icon name={iconName} />}
    {label && <span className="label">{label}</span>}
    {shortcut && <span className="shortcut">{shortcut}</span>}
  </div>
);

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  shortcut: PropTypes.string,
  className: PropTypes.string
};
MenuItem.defaultProps = {
  iconName: undefined,
  shortcut: undefined,
  className: undefined
};

export default MenuItem;
