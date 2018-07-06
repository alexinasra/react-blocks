/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type CardProps = {
  className?: string,
  children: Node,
  direction?: 'column' | 'row',
  [string]: mixed
};

const Card = ({ className, direction, children, ...props }: CardProps): Node => (
  <div className={classNames('card', direction !== 'row' ? 'column' : 'row', className)} {...props}>
    {children}
  </div>
);
Card.defaultProps = {
  direction: 'column',
  className: undefined
};
export default Card;
