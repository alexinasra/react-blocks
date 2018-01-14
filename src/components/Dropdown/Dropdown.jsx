import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Menu from '../Menu';

class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    open: PropTypes.bool,
    menu: PropTypes.objectOf(Menu).isRequired,
    direction: PropTypes.oneOf(['down', 'top', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
  }
  static defaultProps = {
    className: undefined,
    open: false,
    direction: 'bottomRight'
  }
  state = {}
  componentDidMount() {
    const height = this.domRef.clientHeight;
    const width = this.domRef.clientWidth;
    const containerHeight = this.containerDomRef.clientHeight;
    const containerWidth = this.containerDomRef.clientWidth;
    const heightDiff = Math.abs(containerHeight - height);
    const widthDiff = Math.abs(containerWidth - width);

    console.log({
      height,
      width,
      containerHeight,
      containerWidth,
      heightDiff,
      widthDiff
    });
    switch (this.props.direction) {
    case 'top':
      this.setPosition({
        right: -widthDiff / 2,
        left: -widthDiff / 2,
        top: 'auto',
        bottom: 0
      });
      break;
    case 'bottom':
      this.setPosition({
        right: -widthDiff / 2,
        left: -widthDiff / 2,
        top: 0,
        bottom: 'auto'
      });
      break;
    case 'left':
      this.setPosition({
        right: 'auto',
        left: 0,
        top: -heightDiff / 2,
        bottom: -heightDiff / 2
      });
      break;
    case 'right':
      this.setPosition({
        left: 'auto',
        right: 0,
        top: -heightDiff / 2,
        bottom: -heightDiff / 2
      });
      break;
    case 'topLeft':
      this.setPosition({
        left: 'auto',
        right: 0,
        top: 'auto',
        bottom: 0
      });
      break;
    case 'topRight':
      this.setPosition({
        right: 'auto',
        left: 0,
        top: 'auto',
        bottom: 0
      });
      break;
    case 'bottomLeft':
      this.setPosition({
        left: 'auto',
        right: 0,
        top: 0,
        bottom: 'auto'
      });
      break;
    case 'bottomRight':
    default:
      this.setPosition({
        left: 0,
        right: 'auto',
        top: 0,
        bottom: 'auto'
      });
    }
  }
  setPosition(pos) {
    const tmpPos = { ...pos };
    if (document.dir === 'rtl') {
      tmpPos.right = pos.left;
      tmpPos.left = pos.right;
    }
    console.log(tmpPos);
    this.setState(tmpPos);
  }
  render() {
    const { open, menu, direction, className, ...props } = this.props;
    return (
      <div ref={(elm) => { this.domRef = elm; }}
        className={classnames('dropdown', className, `open-${direction}`, { 'is-open': open })}>
        {props.children}
        <div ref={(elm) => { this.containerDomRef = elm; }}
          style={{ top: this.state.top, bottom: this.state.bottom, right: this.state.right, left: this.state.left }}
          className="menu-container">
          {menu}
        </div>
      </div>
    );
  }
}

export default Dropdown;
