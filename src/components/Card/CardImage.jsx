/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type CardImageProps = {
  className?: string,
  src: string,
  [string]: mixed
};

const CardImage = ({
  className,
  src,
  ...props
}: CardImageProps): Node => (
  <div className={classNames('card-image', className)} {...props}>
    <img src={src} alt="Card" />
  </div>
);

CardImage.defaultProps = {
  className: undefined
};
export default CardImage;
