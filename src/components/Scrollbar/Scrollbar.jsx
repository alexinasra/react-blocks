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
      verticalRailHasFocus: false,
      horizontalRailHasFocus: false,
      verticalThumbHasFocus: false,
      horizontalThumbHasFocus: false
    };
    this.initVerticalRail = this.initVerticalRail.bind(this);
    this.initHorizontalRail = this.initHorizontalRail.bind(this);
    this.handleMouseOutScrollbar = this.handleMouseOutScrollbar.bind(this);
    this.handleMouseOverScrollbar = this.handleMouseOverScrollbar.bind(this);
    this.handleMouseOverHorizontalRail = this.handleMouseOverHorizontalRail.bind(this);
    this.handleMouseOutHorizontalRail = this.handleMouseOutHorizontalRail.bind(this);
    this.handleMouseOverVerticalRail = this.handleMouseOverVerticalRail.bind(this);
    this.handleMouseOutVerticalRail = this.handleMouseOutVerticalRail.bind(this);
    this.handleMouseOverHorizontalThumb = this.handleMouseOverHorizontalThumb.bind(this);
    this.handleMouseOutHorizontalThumb = this.handleMouseOutHorizontalThumb.bind(this);
    this.handleMouseOverVerticalThumb = this.handleMouseOverVerticalThumb.bind(this);
    this.handleMouseOutVerticalThumb = this.handleMouseOutVerticalThumb.bind(this);
  }
  componentDidMount() {
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
    return this.rootElement ? this.rootElement.scrollWidth : 0;
  }
  getScrollHeight() {
    return this.rootElement ? this.rootElement.scrollHeight : 0;
  }
  getScrollLeft() {
    return this.rootElement ? this.rootElement.scrollLeft : 0;
  }
  getScrollTop() {
    return this.rootElement ? this.rootElement.scrollTop : 0;
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
  handleMouseOverHorizontalRail() {
    if (!this.state.horizontalRailHasFocus) {
      this.setState({
        horizontalRailHasFocus: true
      });
    }
  }
  handleMouseOutHorizontalRail() {
    if (this.state.horizontalRailHasFocus) {
      this.setState({
        horizontalRailHasFocus: false
      });
    }
  }
  handleMouseOverVerticalRail() {
    if (!this.state.verticalRailHasFocus) {
      this.setState({
        verticalRailHasFocus: true
      });
    }
  }
  handleMouseOutVerticalRail() {
    if (this.state.verticalRailHasFocus) {
      this.setState({
        verticalRailHasFocus: false
      });
    }
  }
  handleMouseOverHorizontalThumb() {
    if (!this.state.horizontalThumbHasFocus) {
      this.setState({
        horizontalThumbHasFocus: true
      });
    }
  }
  handleMouseOutHorizontalThumb() {
    if (this.state.horizontalThumbHasFocus) {
      this.setState({
        horizontalThumbHasFocus: false
      });
    }
  }
  handleMouseOverVerticalThumb() {
    if (!this.state.verticalThumbHasFocus) {
      this.setState({
        verticalThumbHasFocus: true
      });
    }
  }
  handleMouseOutVerticalThumb() {
    if (this.state.verticalThumbHasFocus) {
      this.setState({
        verticalThumbHasFocus: false
      });
    }
  }
  initHorizontalRail(show = false) {
    this.setState({
      hasHorizontalRail: show
    });
  }
  initVerticalRail(show = false) {
    this.setState({
      hasVerticalRail: show
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
        onMouseOver={this.handleMouseOverScrollbar}
        onMouseOut={this.handleMouseOutScrollbar}
        onFocus={this.handleMouseOverScrollbar}
        onBlur={this.handleMouseOutScrollbar}
        ref={(elm) => { this.rootElement = elm; }}
        {...props}>
        { this.props.children }
        { this.state.hasHorizontalRail &&
          (
            <HorizontalScrollbarRail height={this.getClientHeigth()}>
              <HorizontalScrollbarThumb height={this.getHorizontalThumbHeight()} />
            </HorizontalScrollbarRail>
          )
        }
        { this.state.hasVerticalRail &&
          (
            <HorizontalScrollbarRail width={this.getClientWidth()}>
              <VerticalScrollbarThumb width={this.getVerticalThumbWidth()} />
            </HorizontalScrollbarRail>
          )
        }
      </div>
    );
  }
}

export default Scrollbar;
