/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type TitleProps = {
  className?: string,
  children: Node,
  [string]: mixed
};

const Title = ({ className, children, ...props }: TitleProps): Node => (
  <span className={classNames('title', className)} {...props}>
    {children}
  </span>
);

Title.defaultProps = {
  className: undefined
};

export default Title;
