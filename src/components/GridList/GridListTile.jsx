/* @flow */
import React from 'react';
import classnames from 'classnames';

type GridListTileProps = {
  children: React.Node,
  imgSrc: string,
  className?: string,
  [string]: mixed
};

const GridListTile = ({ className, imgSrc, ...props }: GridListProps): React.Node => (
  <div className={classnames('gridlist-tile', className)} {...props}>
    {imgSrc && (
      <img src={imgSrc} alt="" />
    )}
    {props.children}
  </div>
);

export default GridListTile;
