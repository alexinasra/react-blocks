/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';

import classnames from 'classnames';
import Dropdown from '@components/Dropdown';
import Menu, { MenuItem } from '@components/Menu';
import Icon from '@components/Icon';
import BottomLine from '@components/BottomLine';

export type SelectItem = {
  key: string,
  value: mixed,
  label: string
};

type SelectProps = {
  className?: string,
  label?: string,
  onSelect?: (e: SelectItem) => void,
  value: SelectItem | string,
  items: Array<SelectItem>,
  disabled?: boolean,
  [string]: mixed
};

export default class Select extends Component<SelectProps> {
  static defaultProps: SelectProps = {
    className: undefined,
    label: undefined,
    onSelect: () => {},
    disabled: false
  };

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
    const { disabled } = this.props;
    if (!disabled) {
      this.dropdown.open();
    }
  }

  handleMenuClose() {
    this.dropdown.close();
  }

  handleKeyPress(e: SyntheticEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      this.handleMenuOpen();
      e.preventDefault();
    }
    if (e.key === 'Escape') {
      this.handleMenuClose();
      e.preventDefault();
    }
  }

  select(item: SelectItem) {
    const { onSelect } = this.props;
    if (onSelect) {
      onSelect(item);
    }

    this.dropdown.close();
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    this.setState({ active: false });
  }

  render(): Node {
    const {
      className,
      items,
      label,
      value,
      disabled,
      ...props
    } = this.props;

    const {
      active
    } = this.state;


    const menuItems = items.map((item: SelectItem): Node => (
      <MenuItem key={item.key}
        className={classnames('select-item', {
          'is-selected': value && (value.key === item.key),
          'is-disabled': disabled
        })}
        onClick={() => { this.select(item); }}
        label={item.label} />
    ));

    let displayText = '';

    if (value) {
      if (typeof value === 'string') {
        const item = items.find((i: SelectItem): boolean => (i.value === value));
        displayText = item.label;
      } else {
        displayText = value.label;
      }
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
          <span className="text">
            {displayText}
          </span>
          <Icon name="arrow_drop_down" />
          <BottomLine disabled={disabled} active={active} />
        </span>
      </Dropdown>
    );
  }
}
