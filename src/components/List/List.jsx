import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListItem from './ListItem';

const List = ({ className, children, ...props }) => (
  <div className={classNames('list', className)} {...props}>
    {children}
  </div>
);

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
List.defaultProps = {
  className: ''
};

export default List;
export {
  ListItem
};
