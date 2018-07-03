/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';
import Dropdown from '@components/Dropdown';
import Menu, { MenuItem } from '@components/Menu';
import Icon from '@components/Icon';
import BottomLine from '@components/BottomLine';

type SelectItem = {
  key: string,
  value: string,
  label: string
};

type SelectProps = {
  className?: string,
  label?: string,
  onSelect?: (e: React.SyntheticEvent) => void | boolean,
  value: SelectItem,
  items: Array<SelectItem>,
  disabled?: boolean,
  [string]: mixed
};

export default class Select extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
    this.state = {
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
  handleKeyPress(e: React.SyntheticEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      this.handleMenuOpen();
    }
    if (e.key === 'Escape') {
      this.handleMenuClose();
    }
  }
  select(item: SelectItem) {
    this.props.onSelect(item);
    this.dropdown.close();
  }
  handleFocus() {
    this.setState({ active: true });
  }
  handleBlur() {
    this.setState({ active: false });
  }
  render(): React.Node {
    const {
      className,
      items,
      label,
      value,
      disabled,
      ...props
    } = this.props;
    const menuItems = items.map((item: SelectItem): React.Node => (
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
        onRef={(dropdown: Dropdown) => { this.dropdown = dropdown; }}
        menu={(
          <Menu tabIndex={0} role="menu">
            {menuItems}
          </Menu>
        )}
        {...props}>
        <span className="value"
          role="button"
          tabIndex={0}
          onKeyUp={this.handleKeyPress}
          onClick={this.handleMenuOpen}>
          <span className="text">{displayText}</span>
          <Icon name="arrow_drop_down" />
          <BottomLine disabled={this.props.disabled} active={this.state.active} />
        </span>
      </Dropdown>
    );
  }
}
