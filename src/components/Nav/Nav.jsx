import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Scrollbar from '../Scrollbar';

const Nav = ({ direction, className, ...props }) => (
  <Scrollbar className={classnames('nav', direction, className)} {...props}>
    {props.children}
  </Scrollbar>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column'])
};
Nav.defaultProps = {
  className: '',
  direction: 'row'
};

export default Nav;
