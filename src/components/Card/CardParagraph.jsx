/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type CardParagraphProps = {
  className?: string,
  children: Node,
  [string]: mixed
};

const CardParagraph = ({
  className,
  children,
  ...props
}: CardParagraphProps): Node => (
  <div className={classNames('card-paragraph', className)} {...props}>
    {children}
  </div>
);

CardParagraph.defaultProps = {
  className: undefined
};
export default CardParagraph;
