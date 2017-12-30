import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Collapse = ({ className, collapsed, ...props }) => (
  <div className={classnames('collapse', { 'is-collapsed': collapsed }, className)} {...props}>
    {props.children}
  </div>
);

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
  className: PropTypes.string
};

Collapse.defaultProps = {
  collapsed: false,
  className: ''
};

export default Collapse;
