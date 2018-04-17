import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

class ActionIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hoverName: PropTypes.string
  };
  static defaultProps = {
    hoverName: ''
  };
  constructor(props) {
    super(props);

    this.state = {
      iconName: props.name
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ iconName: nextProps.name });
  }

  handleMouseEnter(e) {
    this.setState({ iconName: this.props.hoverName || this.props.name });
    if(this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  }

  handleMouseLeave() {
    this.setState({ iconName: this.props.name });
    if(this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
  }

  render() {
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
