import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dropdown from '../Dropdown';
import Menu, { MenuItem } from '../Menu';
import Scrollbar from '../Scrollbar';
import Icon from '../Icon';

export default class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onSelect: PropTypes.func,
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
    value: undefined,
    onSelect: () => {}
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
  select(item) {
    this.props.onSelect(item);
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
    const menuItems = items.map(item => (
      <MenuItem key={item.key}
        className={classnames('select-item', {
          'is-selected': this.props.value && (this.props.value.key === item.key)
        })}
        onClick={() => { this.select(item); }}
        label={item.label} />
    ));
    let displayText = '';
    if (value) {
      displayText = value.label;
    } else if (label) {
      displayText = label;
    } else if (items[0]) {
      displayText = items[0].label;
    }
    return (
      <Dropdown className={classnames('select', className)}
        onRef={(dropdown) => { this.dropdown = dropdown; }}
        menu={(<Menu style={{ height: '140px' }}>
          <Scrollbar watchSize vertical="hidden" horizontal="visible">
            {menuItems}
          </Scrollbar>
        </Menu>)}>
        <span className="value" role="button" tabIndex={0} onClick={this.handleMenuOpen}>
          <span className="text">{displayText}</span>
          <Icon name="arrow_drop_down" />
        </span>
      </Dropdown>
    );
  }
}
