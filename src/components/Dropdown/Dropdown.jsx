import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Menu from '../Menu';

class Dropdown extends Component {
  static propTypes = {
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onRef: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    menu: PropTypes.objectOf(Menu).isRequired,
    direction: PropTypes.oneOf(['down', 'top', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
  }
  static defaultProps = {
    onOpen: () => {},
    onClose: () => {},
    onRef: () => {},
    className: undefined,
    direction: 'bottomRight'
  }
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  componentDidMount() {
    const height = this.domRef.clientHeight;
    const width = this.domRef.clientWidth;
    const containerHeight = this.containerDomRef.clientHeight;
    const containerWidth = this.containerDomRef.clientWidth;
    const heightDiff = Math.abs(containerHeight - height);
    const widthDiff = Math.abs(containerWidth - width);

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
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }
  setPosition(pos) {
    const tmpPos = { ...pos };
    if (document.dir === 'rtl') {
      tmpPos.right = pos.left;
      tmpPos.left = pos.right;
    }
    this.setState(tmpPos);
  }
  open() {
    this.setState({ isOpen: true });
    document.addEventListener('click', this.handleOutsideClick, false);
    this.props.onOpen();
  }
  close() {
    this.setState({ isOpen: false });
    document.removeEventListener('click', this.handleOutsideClick, false);
    this.props.onClose();
  }
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.domRef.contains(e.target)) {
      return;
    }
    this.close();
  }
  render() {
    const { menu, direction, className, onOpen, onClose, onRef, ...props } = this.props;
    return (
      <div ref={(elm) => { this.domRef = elm; }}
        className={
          classnames(
            'dropdown',
             className,
             `open-${direction}`,
             { 'is-open': this.state.isOpen })}
        {...props}>
        {props.children}
        <div ref={(elm) => { this.containerDomRef = elm; }}
          style={{
            top: this.state.top,
            bottom: this.state.bottom,
            right: this.state.right,
            left: this.state.left }}
          className="menu-container">
          {menu}
        </div>
      </div>
    );
  }
}

export default Dropdown;
