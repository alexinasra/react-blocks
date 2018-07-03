/* @flow */
import React, { Component } from 'react';

import Icon from './Icon';

type ActionIconProps = {
  name: string,
  hoverName?: string,
  onMouseEnter?: (e: React.SyntheticEvent) => void | boolean,
  onMouseLeave?: (e: React.SyntheticEvent) => void | boolean,
  [string]: mixed
};

class ActionIcon extends Component<ActionIconProps> {
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

  handleMouseEnter(e: React.SyntheticEvent) {
    this.setState({ iconName: this.props.hoverName || this.props.name });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  }

  handleMouseLeave(e: React.SyntheticEvent) {
    this.setState({ iconName: this.props.name });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
  }

  render(): React.Node {
    const { name, hoverName, ...props } = this.props;

    return (
      <Icon name={this.state.iconName}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...props} />
    );
  }
}

export default ActionIcon;
