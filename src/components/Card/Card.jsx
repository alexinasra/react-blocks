import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Card = ({ className, direction, ...props }) => (
  <div className={classNames('card', direction !== 'row' ? 'column' : 'row', className)} {...props}>
    {props.children}
  </div>
);
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['column', 'row'])
};
Card.defaultProps = {
  className: '',
  direction: 'column'
};

export default Card;
