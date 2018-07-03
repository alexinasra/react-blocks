/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@components/Icon';
import Dropdown from '@components/Dropdown';

type NavDropdownProps = {
  className?: string,
  menu: React.Node,
  iconName?: string,
  label: string,
  [string]: mixed
};

class NavDropdown extends Component<NavDropdownProps> {
  render(): React.Node {
    const { className, iconName, menu, label, ...props } = this.props;
    return (
      <Dropdown
        className={classnames('nav-link nav-dropdown', className)}
        direction="down"
        ref={(ref: React.Node) => { this.dropdown = ref; }}
        menu={menu}>
        <a
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
          onClick={() => { this.dropdown.open(); }}
          {...props}>
          {iconName && <Icon name={iconName} />}
          <span className="label">{label}</span>
        </a>
      </Dropdown>
    );
  }
}
NavDropdown.defaultProps = {
  className: undefined,
  iconName: undefined
};
export default NavDropdown;
