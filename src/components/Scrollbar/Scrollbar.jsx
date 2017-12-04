import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Scrollbar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }
  static defaultProps = {
    width: 0,
    className: ''
  }
  constructor(props) {
    super(props);
    this.handleOnWheel = this.handleOnWheel.bind(this);
    this.handleHMouseDown = this.handleHMouseDown.bind(this);
    this.handleHMouseUp = this.handleHMouseUp.bind(this);
    this.handleHMouseMove = this.handleHMouseMove.bind(this);
  }

  state = {
    ratio: 0, height: 0, innerHeigh: 0, hbarHeight: 0
  }
  componentDidMount() {
    this.adjustSizes();
  }
  innerHeigh = 0
  height = 0
  adjustSizes() {
    const innerHeigh = this.scrollAreaElm.scrollHeight;
    const height = this.scrollAreaElm.offsetHeight;
    const ratio = (innerHeigh / height);
    const hbarHeight = height / ratio;
    this.ratio = ratio;
    this.height = height;
    this.innerHeigh = innerHeigh;
    this.hbarHeight = hbarHeight;
    this.setState({
      ratio, height, innerHeigh, hbarHeight
    });
  }
  scrollTop(v) {
    let val = v;
    if (val < 0) val = 0;
    else if (val > (this.innerHeigh - this.height - 1)) val = (this.innerHeigh - this.height);
    this.scrollAreaElm.scrollTop = val;
    this.setState({ hbarTopMargin: (val / this.ratio) });
  }
  handleOnWheel(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    this.scrollTop(this.scrollAreaElm.scrollTop + (e.deltaY * this.ratio));
  }
  handleHMouseMove(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    if (e.clientY === 0) return false;
    this.scrollTop((e.clientY - (this.hbarHeight / 2)) * this.ratio);
    return false;
  }
  handleHMouseDown(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    document.addEventListener('mouseup', this.handleHMouseUp);
    document.addEventListener('mousemove', this.handleHMouseMove);
  }
  handleHMouseUp(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    document.removeEventListener('mouseup', this.handleHMouseUp);
    document.removeEventListener('mousemove', this.handleHMouseMove);
    e.target.blur();
  }
  render() {
    return (
      <div onWheel={this.handleOnWheel} className={classnames('scrollbar', this.props.className)}>
        <div className="scrollbar-vbar">
          <div className="scrollbar-vbar-scroll" />
        </div>
        <div className="scrollbar-hbar">
          <div onMouseDown={this.handleHMouseDown}
            tabIndex={0}
            role="button"
            style={{
              height: `${this.state.hbarHeight}px`,
              marginTop: `${this.state.hbarTopMargin}px`
            }}
            className="scrollbar-hbar-scroll" />
        </div>
        <div ref={(elm) => { this.scrollAreaElm = elm; }} className="scrollbar-scrollarea">
          <div className="scrollbar-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Scrollbar;
