/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type GridListTileProps = {
  children: Node,
  imgSrc: string,
  className?: string,
  [string]: mixed
};

const GridListTile = ({ className, imgSrc, children, ...props }: GridListTileProps): Node => (
  <div className={classnames('gridlist-tile', className)} {...props}>
    {imgSrc && (
      <img src={imgSrc} alt="" />
    )}
    {children}
  </div>
);
GridListTile.defaultProps = {
  className: undefined
};
export default GridListTile;
