import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GridLayout = ({ className, ...props }) => (
  <div className={classnames('grid-layout', 'grid-container', className)} {...props}>
    {props.children}
  </div>
);

GridLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
GridLayout.defaultProps = {
  className: ''
};

export default GridLayout;
