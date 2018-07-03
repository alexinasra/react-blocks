import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Menu from '@components/Menu';

class Dropdown extends Component {
  static propTypes = {
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onRef: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    menu: PropTypes.objectOf(Menu).isRequired,
    direction: PropTypes.oneOf(['down', 'up', 'left', 'right', 'upLeft', 'upRight', 'downLeft', 'downRight'])
  }
  static defaultProps = {
    onOpen: () => {},
    onClose: () => {},
    onRef: () => {},
    className: undefined,
    direction: 'downRight'
  }
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  componentDidMount() {
    const height = this.domRef ? this.domRef.clientHeight : 0;
    const width = this.domRef ? this.domRef.clientWidth : 0;
    const containerHeight = this.containerDomRef ? this.containerDomRef.clientHeight : 0;
    const containerWidth = this.containerDomRef ? this.containerDomRef.clientWidth : 0;
    const heightDiff = Math.abs(containerHeight - height);
    const widthDiff = Math.abs(containerWidth - width);

    switch (this.props.direction) {
    case 'up':
      this.setPosition({
        right: -widthDiff / 2,
        left: -widthDiff / 2,
        up: 'auto',
        down: 0
      });
      break;
    case 'down':
      this.setPosition({
        right: -widthDiff / 2,
        left: -widthDiff / 2,
        up: 0,
        down: 'auto'
      });
      break;
    case 'left':
      this.setPosition({
        right: 'auto',
        left: 0,
        up: -heightDiff / 2,
        down: -heightDiff / 2
      });
      break;
    case 'right':
      this.setPosition({
        left: 'auto',
        right: 0,
        up: -heightDiff / 2,
        down: -heightDiff / 2
      });
      break;
    case 'upLeft':
      this.setPosition({
        left: 'auto',
        right: 0,
        up: 'auto',
        down: 0
      });
      break;
    case 'upRight':
      this.setPosition({
        right: 'auto',
        left: 0,
        up: 'auto',
        down: 0
      });
      break;
    case 'downLeft':
      this.setPosition({
        left: 'auto',
        right: 0,
        up: 0,
        down: 'auto'
      });
      break;
    case 'downRight':
    default:
      this.setPosition({
        left: 0,
        right: 'auto',
        up: 0,
        down: 'auto'
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
    if (this.domRef && this.domRef.contains(e.target)) {
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
            { 'is-open': this.state.isOpen }
          )}
        {...props}>
        {props.children}
        <div ref={(elm) => { this.containerDomRef = elm; }}
          style={{
            up: this.state.up,
            down: this.state.down,
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
