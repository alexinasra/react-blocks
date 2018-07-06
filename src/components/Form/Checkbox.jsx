/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';

import classnames from 'classnames';
import Icon from '@components/Icon';
import BottomLine from '@components/BottomLine';

type CheckboxProps = {
  onRef?: (e: SyntheticEvent) => void | boolean,
  onChange?: (e: SyntheticEvent) => void | boolean,
  checked: boolean | 'mixed',
  label: string,
  className?: string,
  disabled?: boolean
};

export default class Checkbox extends Component<CheckboxProps> {
  static defaultProps: CheckboxProps = {
    className: undefined,
    onRef: () => {},
    onChange: () => {},
    disabled: false
  }

  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    const { onRef } = this.props;

    if (onRef) {
      onRef(this);
    }
  }

  handleClick() {
    this.toggle();
  }

  handleKeyPress(e: SyntheticEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.toggle();
    }
  }

  toggle() {
    const { disabled, checked, onChange } = this.props;
    if (!disabled) {
      if (onChange) {
        onChange(!checked);
      }
    }
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    this.setState({ active: false });
  }

  render(): Node {
    const {
      onRef,
      label,
      onChange,
      checked,
      className,
      disabled,
      ...props } = this.props;

    const { active } = this.state;
    let iconName = 'check_box_outline_blank';

    if (checked === 'mixed') {
      iconName = 'indeterminate_check_box';
    } else if (checked) {
      iconName = 'check_box';
    }
    return (
      <div className={classnames('checkbox', className, { 'is-disabled': disabled })}
        tabIndex={0}
        role="checkbox"
        aria-checked={checked}
        onClick={this.handleClick}
        onKeyUp={this.handleKeyPress}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...props}>
        <Icon name={iconName} />
        <span className="label">
          {label}
        </span>
        <BottomLine active={active} disabled={disabled} />
      </div>
    );
  }
}
