/* @flow */
import React, { Component } from 'react';
import type { Node } from 'react';

import classnames from 'classnames';
import Icon from '@components/Icon';

type NavMenuProps = {
  className?: string,
  children: Node,
  iconName?: string,
  label: string,
  [string]: mixed
};

type NavMenuState = {
  open: boolean
};

class NavMenu extends Component<NavMenuProps> {
  state: NavMenuState = {
    open: false
  }

  render(): Node {
    const { className, iconName, children, label, ...props } = this.props;
    const { open } = this.state;

    return (
      <div
        className={classnames('nav-link nav-menu', className, { open })}
        ref={(ref: Node) => { this.dropdown = ref; }}>
        <a
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
          onClick={() => { this.setState({ open: !open }); }}
          {...props}
        >
          {iconName && <Icon name={iconName} />}
          <span className="label">
            {label}
          </span>
        </a>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}
NavMenu.defaultProps = {
  className: undefined,
  iconName: undefined
};
export default NavMenu;
