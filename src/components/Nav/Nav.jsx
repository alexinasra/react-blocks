import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Nav = ({ direction, className, ...props }) => (
  <div className={classnames('nav', direction, className)} {...props}>
    {props.children}
  </div>
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
