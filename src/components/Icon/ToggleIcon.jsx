/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';


import ActionIcon from './ActionIcon';

type ToggleIconProps = {
  activeIconName: string,
  inactiveIconName: string,
  active?: boolean,
  onToggle?: (e: SyntheticEvent) => void | boolean,
  [string]: mixed
};

type ToggleIconState = {
  isActive: boolean
};

class ToggleIcon extends Component<ToggleIconProps, ToggleIconState> {
  static defaultProps: ToggleIconProps = {
    active: false,
    onToggle: () => {}
  }

  constructor(props: ToggleIconProps) {
    super(props);

    this.state = {
      isActive: props.active
    };

    this.handleClick = this.handleClick.bind(this);
  }

  switchOn() {
    this.setState({
      isActive: true
    });
  }

  switchOff() {
    this.setState({
      isActive: false
    });
  }

  handleClick(e: SyntheticEvent) {
    const { onToggle } = this.props;
    const { isActive } = this.state;

    if (onToggle) {
      onToggle(e);
    }


    if (isActive) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  render(): Node {
    const { isActive } = this.state;
    const { activeIconName, inactiveIconName } = this.props;

    const name = isActive ? activeIconName : inactiveIconName;

    return (
      <ActionIcon name={name}
        onClick={this.handleClick} />
    );
  }
}

export default ToggleIcon;
