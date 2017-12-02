import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = ({ className, ...props }) => (
  <span className={classNames('title', className)} {...props}>{props.children}</span>
);

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Title.defaultProps = {
  className: ''
};

export default Title;
