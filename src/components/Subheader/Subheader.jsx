import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Subheader = ({ className, ...props }) => (
  <span className={classNames('subheader', className)} {...props}>{props.children}</span>
);

Subheader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Subheader.defaultProps = {
  className: ''
};

export default Subheader;
