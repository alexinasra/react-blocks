import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = ({
  className,
  src,
  ...props
}) => (
  <img className={classNames('avatar', className)}
    src={src}
    alt="avatar"
    {...props} />
);
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};
Avatar.defaultProps = {
  className: ''
};
export default Avatar;
