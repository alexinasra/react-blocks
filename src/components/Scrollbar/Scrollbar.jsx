/*
  maxScrollbarLength: undefined,
  minScrollbarLength: undefined,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,

onFocus : add focus class to root element
onBlur : remove focus class from root element

*/
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { VerticalScrollbarRail, HorizontalScrollbarRail } from './ScrollbarRail';
import { VerticalScrollbarThumb, HorizontalScrollbarThumb } from './ScrollbarThumb';

class Scrollbar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      hasVerticalRail: false,
      hasHorizontalRail: false,
      hasFocus: false,
      boundingOffset: { top: 0, left: 0 }
    };
    this.initVerticalRail = this.initVerticalRail.bind(this);
    this.initHorizontalRail = this.initHorizontalRail.bind(this);
    this.handleMouseOutScrollbar = this.handleMouseOutScrollbar.bind(this);
    this.handleMouseOverScrollbar = this.handleMouseOverScrollbar.bind(this);
    this.handleHorizontalThumbDrap = this.handleHorizontalThumbDrap.bind(this);
    this.handleVerticalThumbDrap = this.handleVerticalThumbDrap.bind(this);
  }

  componentDidMount() {
    this.initBoundingOffset();
    this.initHorizontalRail(this.hasHorizontalRail());
    this.initVerticalRail(this.hasVerticalRail());
  }

  getClientWidth() {
    return this.rootElement ? this.rootElement.clientWidth : 0;
  }

  getClientHeigth() {
    return this.rootElement ? this.rootElement.clientHeight : 0;
  }

  getScrollWidth() {
    return this.contetnElement ? this.contetnElement.scrollWidth : 0;
  }

  getScrollHeight() {
    return this.contetnElement ? this.contetnElement.scrollHeight : 0;
  }

  getScrollLeft() {
    return this.contetnElement ? this.contetnElement.scrollLeft : 0;
  }

  getScrollTop() {
    return this.contetnElement ? this.contetnElement.scrollTop : 0;
  }

  getHorizontalThumbHeight() {
    const ratio = (this.getScrollHeight() / this.getClientHeigth());
    const height = this.getClientHeigth() / ratio;
    return height > 9 ? height : 9;
  }

  getVerticalThumbWidth() {
    const ratio = (this.getScrollWidth() / this.getClientWidth());
    const width = (this.getClientWidth() / ratio);
    return width > 9 ? width : 9;
  }

  initBoundingOffset() {
    const rect = this.rootElement.getBoundingClientRect();
    this.setState({ boundingOffset: rect });
  }
  handleMouseOverScrollbar() {
    if (!this.state.hasFocus) {
      this.setState({ hasFocus: true });
    }
  }

  handleMouseOutScrollbar() {
    if (this.state.hasFocus) {
      this.setState({ hasFocus: false });
    }
  }

  handleHorizontalThumbDrap(e) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    const horizontalPosition = e.pageY - this.state.boundingOffset.top;
    const maxTop = this.getClientHeigth() - this.getHorizontalThumbHeight() - 6;
    if (horizontalPosition >= 0 && horizontalPosition <= maxTop) {
      const percentage = (horizontalPosition / maxTop) * 100;
      this.contetnElement.scrollTop = (percentage * this.getScrollHeight()) / 100;
      this.setState({ horizontalPosition });
    }
  }
  handleVerticalThumbDrap(e) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    const verticalPosition = e.pageX - this.state.boundingOffset.left;
    const maxLeft = this.getClientWidth() - this.getVerticalThumbWidth() - 6;
    if (verticalPosition >= 0 && verticalPosition <= maxLeft) {
      const percentage = (verticalPosition / maxLeft) * 100;
      this.contetnElement.scrollLeft = (percentage * this.getScrollWidth()) / 100;
      this.setState({ verticalPosition });
    }
  }

  initHorizontalRail(show = false) {
    this.setState({
      hasHorizontalRail: show,
      horizontalPosition: 0
    });
  }

  initVerticalRail(show = false) {
    this.setState({
      hasVerticalRail: show,
      verticalPosition: 0
    });
  }

  hasHorizontalRail() {
    return this.getClientHeigth() - this.getScrollHeight() < 0;
  }

  hasVerticalRail() {
    return this.getClientWidth() - this.getScrollWidth() < 0;
  }

  render() {
    const { className, ...props } = this.props;
    const classes = classnames(
      'scrollbar',
      {
        'has-horizontal': this.state.hasHorizontalRail,
        'has-vertical': this.state.hasVerticalRail,
        'has-focus': this.state.hasFocus
      },
      className
    );

    return (
      <div className={classes}
        ref={(elm) => { this.rootElement = elm; }}
        onMouseOver={this.handleMouseOverScrollbar}
        onMouseOut={this.handleMouseOutScrollbar}
        onFocus={this.handleMouseOverScrollbar}
        onBlur={this.handleMouseOutScrollbar}
        {...props}>
        <div className="scrollbar-contet" ref={(elm) => { this.contetnElement = elm; }}>
          { this.props.children }
        </div>
        { this.state.hasHorizontalRail &&
          (
            <HorizontalScrollbarRail>
              <HorizontalScrollbarThumb height={this.getHorizontalThumbHeight()}
                top={this.state.horizontalPosition}
                draggable
                onDragStart={(e) => { e.dataTransfer.setDragImage(new Image(), 0, 0); }}
                onDrag={this.handleHorizontalThumbDrap} />
            </HorizontalScrollbarRail>
          )
        }
        { this.state.hasVerticalRail &&
          (
            <VerticalScrollbarRail>
              <VerticalScrollbarThumb left={this.state.verticalPosition}
                width={this.getVerticalThumbWidth()}
                draggable
                onDragStart={(e) => { e.dataTransfer.setDragImage(new Image(), 0, 0); }}
                onDrag={this.handleVerticalThumbDrap} />
            </VerticalScrollbarRail>
          )
        }
      </div>
    );
  }
}

export default Scrollbar;
