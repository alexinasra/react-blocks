import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = ({
  className,
  src,
  size,
  ...props
}) => (
  <img className={classNames('avatar', size, className)}
    src={src}
    alt="avatar"
    {...props} />
);
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
Avatar.defaultProps = {
  className: '',
  size: 'medium'
};
export default Avatar;
