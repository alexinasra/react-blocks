/* @flow */
import React from 'react';
import classNames from 'classnames';
import Scrollbar from '@components/Scrollbar';

type CardParagraphProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};

const CardParagraph = ({
  className,
  ...props
}: CardParagraphProps): React.Node => (
  <div className={classNames('card-paragraph', className)} {...props}>
    <Scrollbar style={{ height: '220px', width: '100%' }}>
      {props.children}
    </Scrollbar>
  </div>
);

CardParagraph.defaultProps = {
  className: undefined
};
export default CardParagraph;
