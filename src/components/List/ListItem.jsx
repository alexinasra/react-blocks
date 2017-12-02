import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItem = ({
  className,
  children,
  ...props
}) => (
  <div className={classNames('list-item', className)} {...props}>
    {children}
  </div>
);
ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
ListItem.defaultProps = {
  className: ''
};

export default ListItem;
