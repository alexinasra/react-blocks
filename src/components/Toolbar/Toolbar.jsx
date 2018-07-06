/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

import Title from '@components/Title';
import Subheader from '@components/Subheader';

type ToolbarProps = {
  className?: string,
  children: Node,
  menuButton: Node,
  logo: Node,
  title?: string,
  subheader?: string,
  [string]: mixed
};
const Toolbar = ({
  menuButton,
  title,
  subheader,
  logo,
  className,
  children,
  ...props
}: ToolbarProps): Node => (
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
        <Title>
          {title}
        </Title>
        {subheader && (
          <Subheader>
            {subheader}
          </Subheader>)}
      </div>
    )}
    <div className="siparator" />
    <div className="actions-container">
      {children}
    </div>
  </div>
);

Toolbar.defaultProps = {
  className: undefined,
  title: undefined,
  subheader: undefined
};

export default Toolbar;
