/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type IconProps = {
  className?: string,
  name: string
};

const Icon = ({ name, className, ...props }: IconProps): Node => (
  <i className={classnames('material-icons', 'icon', className)} {...props}>
    {name}
  </i>
);

Icon.defaultProps = {
  className: undefined
};
export default Icon;
