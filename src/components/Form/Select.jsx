import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dropdown from '../Dropdown';
import Menu, { MenuItem } from '../Menu';
import Scrollbar from '../Scrollbar';
import Icon from '../Icon';
import BottomLine from '../BottomLine';

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
    })).isRequired,
    disabled: PropTypes.bool
  }
  static defaultProps = {
    className: undefined,
    label: undefined,
    value: undefined,
    onSelect: () => {},
    disabled: false
  }
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      active: false
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleMenuOpen() {
    if (!this.props.disabled) {
      this.dropdown.open();
    }
  }
  handleMenuClose() {
    this.dropdown.close();
  }
  handleKeyPress(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      this.handleMenuOpen();
    }
    if (e.key === 'Escape') {
      this.handleMenuClose();
    }
  }
  select(item) {
    this.props.onSelect(item);
    this.dropdown.close();
  }
  handleFocus() {
    this.setState({ active: true });
  }
  handleBlur() {
    this.setState({ active: false });
  }
  render() {
    const {
      className,
      items,
      label,
      value,
      disabled,
      ...props
    } = this.props;
    const menuItems = items.map(item => (
      <MenuItem key={item.key}
        className={classnames('select-item', {
          'is-selected': this.props.value && (this.props.value.key === item.key),
          'is-disabled': this.props.disabled
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
      <Dropdown className={classnames('select', className, { 'is-disabled': disabled })}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyPress}
        onRef={(dropdown) => { this.dropdown = dropdown; }}
        menu={(<Menu tabIndex={0} role="menu" style={{ height: '140px' }}>
          <Scrollbar watchSize vertical="hidden" horizontal="visible">
            {menuItems}
          </Scrollbar>
        </Menu>)}>
        <span className="value"
          role="button"
          tabIndex={0}
          onClick={this.handleMenuOpen}>
          <span className="text">{displayText}</span>
          <Icon name="arrow_drop_down" />
          <BottomLine disabled={this.props.disabled} active={this.state.active} />
        </span>
      </Dropdown>
    );
  }
}
