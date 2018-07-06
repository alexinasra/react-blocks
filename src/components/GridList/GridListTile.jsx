/* @flow */
import React from 'react';
import classnames from 'classnames';

type GridListTileProps = {
  children: React.Node,
  imgSrc: string,
  className?: string,
  [string]: mixed
};

const GridListTile = ({ className, imgSrc, children, ...props }: GridListTileProps): React.Node => (
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
