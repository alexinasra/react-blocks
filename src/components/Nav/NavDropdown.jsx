import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@components/Icon';
import Dropdown from '@components/Dropdown';

class NavDropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    menu: PropTypes.node.isRequired,
    iconName: PropTypes.string,
    label: PropTypes.string.isRequired
  }
  static defaultProps = {
    className: undefined,
    iconName: undefined
  }
  render() {
    const { className, iconName, menu, label, ...props } = this.props;
    return (

      <Dropdown className={classnames('nav-link nav-dropdown', className)} direction="down" ref={(ref) => { this.dropdown = ref; }} menu={menu}>
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
export default NavDropdown;
