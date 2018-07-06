/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';
import Menu from '@components/Menu';

type DropdownProps = {
  onOpen?: (e: React.SyntheticEvent) => void | boolean,
  onClose?: (e: React.SyntheticEvent) => void | boolean,
  onRef?: (e: React.Node) => void | boolean,
  children: React.Node,
  className?: string,
  menu: React.Element<Menu>,
  direction?: 'down' | 'up' | 'left' | 'right' | 'upLeft' | 'upRight' | 'downLeft' | 'downRight'
};

class Dropdown extends Component<DropdownProps> {
  static defaultProps: DropdownProps = {
    direction: 'down',
    className: undefined,
    onRef: () => {},
    onOpen: () => {},
    onClose: () => {}
  };

  constructor(props: DropdownProps) {
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

    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(undefined);
    }
  }

  setPosition(pos: {
    right: number | string,
    left: number | string,
    up: number | string,
    down: number | string
  }) {
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
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  }

  close() {
    this.setState({ isOpen: false });
    document.removeEventListener('click', this.handleOutsideClick, false);
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleOutsideClick(e: React.SyntheticEvent) {
    // ignore clicks on the component itself
    if (this.domRef && this.domRef.contains(e.target)) {
      return;
    }
    this.close();
  }

  render(): React.Node {
    const { menu, direction, className, onOpen, onClose, onRef, ...props } = this.props;
    return (
      <div ref={(elm: React.Node) => { this.domRef = elm; }}
        className={
          classnames(
            'dropdown',
            className,
            `open-${direction}`,
            { 'is-open': this.state.isOpen }
          )}
        {...props}>
        {props.children}
        <div ref={(elm: React.Node) => { this.containerDomRef = elm; }}
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
