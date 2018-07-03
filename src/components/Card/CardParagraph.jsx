import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Scrollbar from '@components/Scrollbar';

const CardParagraph = ({
  className,
  ...props
}) => (
  <div className={classNames('card-paragraph', className)} {...props}>
    <Scrollbar style={{ height: '220px', width: '100%' }}>
      {props.children}
    </Scrollbar>
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
