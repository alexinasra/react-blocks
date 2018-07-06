/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type CardSectionProps = {
  className?: string,
  children: Node,
  direction: 'column' | 'row',
  [string]: mixed
};

const CardSection = ({
  className,
  direction,
  children,
  ...props
}: CardSectionProps): Node => (
  <div className={classNames('card-section', direction !== 'row' ? 'column' : 'row', className)} {...props}>
    {children}
  </div>
);
CardSection.defaultProps = {
  className: undefined
};

export default CardSection;
