/* @flow */
import React from 'react';
import classnames from 'classnames';
import Icon from '@components/Icon';

type MenuItemProps = {
  label: string,
  iconName?: string,
  shortcut?: string,
  className?: string,
  [string]: mixed
};

const MenuItem = ({
  label,
  iconName,
  shortcut,
  className,
  ...props
}: MenuItemProps): React.Node => (
  <div tabIndex={0} role="menuitem" className={classnames('menu-item', className)} {...props}>
    {iconName && <Icon name={iconName} />}
    {label && <span className="label">{label}</span>}
    {shortcut && <span className="shortcut">{shortcut}</span>}
  </div>
);

MenuItem.defaultProps = {
  className: undefined,
  iconName: undefined,
  shortcut: undefined
};
export default MenuItem;
