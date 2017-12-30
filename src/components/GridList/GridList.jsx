import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GridList = ({ columns, className, ...props }) => (
  <div className={classnames('gridlist', className)} {...props}>
    {props.children}
  </div>
);
GridList.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
  className: PropTypes.string
};
GridList.defaultProps = {
  columns: 6,
  className: ''
};

export default GridList;
