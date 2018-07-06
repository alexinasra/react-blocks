/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';
import Icon from '@components/Icon';

type NavOuterLinkProps = {
  to: string,
  label: string,
  iconName?: string,
  className?: string,
  [string]: mixed
};

const NavOuterLink = ({
  to,
  label,
  iconName,
  className,
  ...props
}: NavOuterLinkProps): Node => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className={classnames('nav-link nav-outer_link', className)}
    {...props}
  >
    {iconName && <Icon name={iconName} />}
    <span className="label">
      {label}
    </span>
  </a>
);
NavOuterLink.defaultProps = {
  className: undefined,
  iconName: undefined
};

export default NavOuterLink;
