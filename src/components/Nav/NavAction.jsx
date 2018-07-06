/* @flow */
import React from 'react';
import classnames from 'classnames';
import Icon from '@components/Icon';

type NavActionProps = {
  label: string,
  iconName?: string,
  className?: string,
  [string]: mixed
};

const NavAction = ({
  label,
  iconName,
  className,
  ...props
}: NavActionProps): React.Node => (
  <a className={classnames('nav-link nav-action', className)} {...props}>
    {iconName && <Icon name={iconName} />}
    <span className="label">
      {label}
    </span>
  </a>
);
NavAction.defaultProps = {
  className: undefined,
  iconName: undefined
};

export default NavAction;
