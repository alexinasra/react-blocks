import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardParagraph = ({
  className,
  ...props
}) => (
  <div className={classNames('card-paragraph')} {...props}>
    {props.children}
  </div>
);
CardParagraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
CardParagraph.defaultProps = {
  className: ''
};
export default CardParagraph;
