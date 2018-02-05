import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dropdown from '../Dropdown';
import Menu, { MenuItem } from '../Menu';

export default class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })).isRequired
  }
  static defaultProps = {
    className: undefined,
    label: undefined,
    value: undefined
  }
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }
  handleMenuOpen() {
    this.dropdown.open();
  }
  handleMenuClose() {
    this.dropdown.close();
  }
  render() {
    const {
      className,
      items,
      label,
      value,
      ...props
    } = this.props;
    const menuItems = items.map(item => <MenuItem key={item.key} label={item.label} />);
    let displayText = '';
    if (value) {
      displayText = value.label;
    } else if (label) {
      displayText = label;
    } else if (items[0]) {
      displayText = items[0].label;
    }
    return (
      <div className={classnames('select', className)}>
        <Dropdown onRef={(dropdown) => { this.dropdown = dropdown; }} className="value" menu={(<Menu>{menuItems}</Menu>)}>
          <button onClick={this.handleMenuOpen}>{displayText}</button>
        </Dropdown>
      </div>
    );
  }
}
