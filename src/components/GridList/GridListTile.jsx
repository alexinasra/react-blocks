import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GridListTile = ({ className, imgSrc, ...props }) => (
  <div className={classnames('gridlist-tile', className)} {...props}>
    {imgSrc && (
      <img src={imgSrc} alt="" />
    )}
    {props.children}
  </div>
);

GridListTile.propTypes = {
  children: PropTypes.node,
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string
};
GridListTile.defaultProps = {
  className: '',
  children: ''
};

export default GridListTile;
