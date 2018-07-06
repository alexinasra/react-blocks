/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';
import Scrollbar from '@components/Scrollbar';

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
    <Scrollbar style={{ height: '220px', width: '100%' }}>
      {children}
    </Scrollbar>
  </div>
);

CardParagraph.defaultProps = {
  className: undefined
};
export default CardParagraph;
