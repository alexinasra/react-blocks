import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = ({ name, className, ...props }) => (
  <i className={classnames('material-icons', 'icon', className)} {...props}>{name}</i>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};
Icon.defaultProps = {
  className: ''
};

export default Icon;
