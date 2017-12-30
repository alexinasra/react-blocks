import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Title from '../Title';
import Subheader from '../Subheader';

const Toolbar = ({ menuButton, title, subheader, logo, className, children, ...props }) => (
  <div className={classnames('toolbar', className)} {...props}>
    {menuButton && (
      <div className="menubutton-container">
        {menuButton}
      </div>
    )}
    {logo && (
      <div className="logo-container">
        {logo}
      </div>
    )}
    {title && (
      <div className={classnames(
        'title-container',
        { 'has-subheader': subheader }
      )}>
        <Title>{title}</Title>
        {subheader && (<Subheader>{subheader}</Subheader>)}
      </div>
    )}
    <div className="siparator" />
    <div className="actions-container">
      {children}
    </div>
  </div>
);

Toolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  menuButton: PropTypes.node,
  logo: PropTypes.node,
  title: PropTypes.string,
  subheader: PropTypes.string
};
Toolbar.defaultProps = {
  className: '',
  menuButton: false,
  logo: false,
  title: '',
  subheader: '',
  children: ''
};

export default Toolbar;
