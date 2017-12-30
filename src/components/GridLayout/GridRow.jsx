import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GridRow = ({ className, ...props }) => (
  <div className={classnames('grid-row', className)} {...props}>
    {props.children}
  </div>
);

GridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
GridRow.defaultProps = {
  className: ''
};

export default GridRow;
