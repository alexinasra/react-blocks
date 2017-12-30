import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Nav from './Nav';

const TabsNav = ({ className, ...props }) => (
  <Nav className={classnames('tabs-nav', className)} {...props}>
    {props.children}
  </Nav>
);

TabsNav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
TabsNav.defaultProps = {
  className: ''
};

export default TabsNav;
