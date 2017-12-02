import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardImage = ({
  className,
  src,
  ...props
}) => (
  <div className={classNames('card-image', className)} {...props}>
    <img src={src} alt="Card" />
  </div>
);
CardImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};
CardImage.defaultProps = {
  className: ''
};
export default CardImage;
