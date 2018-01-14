import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Menu = ({ className, ...props }) => (
  <div className={classnames('menu', className)} {...props}>
    {props.children}
  </div>
);

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Menu.defaultProps = {
  className: undefined
};

export default Menu;
