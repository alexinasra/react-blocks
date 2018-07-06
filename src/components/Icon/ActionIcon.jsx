/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';


import Icon from './Icon';

type ActionIconProps = {
  name: string,
  hoverName?: string,
  onMouseEnter?: (e: SyntheticEvent) => void | boolean,
  onMouseLeave?: (e: SyntheticEvent) => void | boolean,
  [string]: mixed
};

class ActionIcon extends Component<ActionIconProps> {
  static defaultProps: ActionIcon = {
    hoverName: undefined,
    onMouseEnter: () => {},
    onMouseLeave: () => {}
  }

  constructor(props: ActionIconProps) {
    super(props);

    this.state = {
      iconName: props.name
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentWillReceiveProps(nextProps: ActionIconProps) {
    this.setState({ iconName: nextProps.name });
  }

  handleMouseEnter(e: SyntheticEvent) {
    const { onMouseEnter, hoverName, name } = this.props;

    this.setState({ iconName: hoverName || name });

    if (onMouseEnter) {
      onMouseEnter(e);
    }
  }

  handleMouseLeave(e: SyntheticEvent) {
    const { onMouseLeave, name } = this.props;
    this.setState({ iconName: name });
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  }

  render(): Node {
    const { name, hoverName, ...props } = this.props;
    const { iconName } = this.state;
    return (
      <Icon name={iconName}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...props} />
    );
  }
}

export default ActionIcon;
