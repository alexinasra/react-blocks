import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardSection = ({
  className,
  direction,
  ...props
}) => (
  <div className={classNames('card-section', direction !== 'row' ? 'column' : 'row', className)} {...props}>
    {props.children}
  </div>
);
CardSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['column', 'row'])
};
CardSection.defaultProps = {
  className: '',
  direction: 'column'
};
export default CardSection;
