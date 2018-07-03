/* @flow */
import React from 'react';
import classnames from 'classnames';
import Icon from '@components/Icon';

type NavCollapseProps = {
  label: string,
  iconName?: string,
  className?: string,
  [string]: mixed
};

const NavCollapse = ({
  label,
  iconName,
  className,
  ...props
}: NavCollapseProps): React.Node => (
  <div className={classnames('nav-link nav-action', className)}>
    <span>
      {iconName && <Icon name={iconName} />}
      <span className="label">{label}</span>
    </span>
  </div>
);
NavCollapse.defaultProps = {
  className: undefined,
  iconName: undefined
};

export default NavCollapse;
