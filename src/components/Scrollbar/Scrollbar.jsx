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
    this.handleOnWheel = this.handleOnWheel.bind(this);
    this.handleMouseOutScrollbar = this.handleMouseOutScrollbar.bind(this);
    this.handleMouseOverScrollbar = this.handleMouseOverScrollbar.bind(this);
    this.handleHorizontalThumbDrag = this.handleHorizontalThumbDrag.bind(this);
    this.handleVerticalThumbDrag = this.handleVerticalThumbDrag.bind(this);
  }

  componentDidMount() {
    this.initBoundingOffset();
    this.initHorizontalRail(this.hasHorizontalRail());
    this.initVerticalRail(this.hasVerticalRail());
  }

  getClientWidth() {
    return this.rootElement ? this.rootElement.clientWidth : 0;
  }

  getClientHeight() {
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
    const height = this.getClientHeight() * (this.getClientHeight() / this.getScrollHeight());
    return Math.ceil(height);
  }

  getVerticalThumbWidth() {
    const ratio = (this.getScrollWidth() / this.getClientWidth());
    const width = (this.getClientWidth() / ratio);
    return width > 9 ? width : 9;
  }

  getMaxTop() {
    return this.getClientHeight() - this.getHorizontalThumbHeight() - 18;
  }

  getMaxLeft() {
    return this.getClientWidth() - this.getVerticalThumbWidth() - 18;
  }

  initBoundingOffset() {
    const rect = this.rootElement.getBoundingClientRect();
    this.setState({ boundingOffset: rect });
  }

  handleOnWheel(e) {
    const { deltaY } = e.nativeEvent;
    const horizontalPosition = this.state.horizontalPosition + deltaY;

    const maxTop = this.getMaxTop();
    if (horizontalPosition >= 0 && horizontalPosition <= maxTop) {
      e.preventDefault();
      this.scrollTop(horizontalPosition);
    }
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

  handleHorizontalThumbDrag(e) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    const horizontalPosition = (
      e.pageY -
      this.state.boundingOffset.top -
      this.state.horizontalOffsetY
    );
    this.scrollTop(horizontalPosition);
  }

  scrollTop(horizontalPosition) {
    const maxTop = this.getMaxTop();
    if (horizontalPosition >= 0 && horizontalPosition <= maxTop) {
      const percentage = Math.ceil((horizontalPosition / (maxTop)) * 100);
      this.contetnElement.scrollTop =
        (percentage * (this.getScrollHeight() - this.getClientHeight())) / 100;
      this.setState({ horizontalPosition });
    }
  }
  handleVerticalThumbDrag(e) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    const verticalPosition = (
      e.pageX -
      this.state.boundingOffset.left -
      this.state.verticalOffsetX
    );
    this.scrollLeft(verticalPosition);
  }
  scrollLeft(verticalPosition) {
    const maxLeft = this.getMaxLeft();
    if (verticalPosition >= 0 && verticalPosition <= maxLeft) {
      const percentage = (verticalPosition / maxLeft) * 100;
      this.contetnElement.scrollLeft =
        (percentage * (this.getScrollWidth() - this.getClientWidth())) / 100;
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
    return this.getClientHeight() - this.getScrollHeight() < 0;
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
        <div className="scrollbar-contet"
          onWheel={this.handleOnWheel}
          ref={(elm) => { this.contetnElement = elm; }}>
          { this.props.children }
        </div>
        { this.state.hasHorizontalRail &&
          (
            <HorizontalScrollbarRail>
              <HorizontalScrollbarThumb height={this.getHorizontalThumbHeight()}
                top={this.state.horizontalPosition}
                draggable
                onMouseDown={(e) => {
                  this.setState({ horizontalOffsetY: e.nativeEvent.offsetY });
                }}
                onDragStart={(e) => { e.dataTransfer.setDragImage(new Image(), 0, 0); }}
                onDrag={this.handleHorizontalThumbDrag} />
            </HorizontalScrollbarRail>
          )
        }
        { this.state.hasVerticalRail &&
          (
            <VerticalScrollbarRail>
              <VerticalScrollbarThumb left={this.state.verticalPosition}
                width={this.getVerticalThumbWidth()}
                draggable
                onMouseDown={(e) => {
                  this.setState({ verticalOffsetX: e.nativeEvent.offsetX });
                }}
                onDragStart={(e) => { e.dataTransfer.setDragImage(new Image(), 0, 0); }}
                onDrag={this.handleVerticalThumbDrag} />
            </VerticalScrollbarRail>
          )
        }
      </div>
    );
  }
}

export default Scrollbar;
