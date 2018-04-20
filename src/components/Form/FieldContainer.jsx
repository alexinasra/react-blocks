import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BottomLine from '@components/BottomLine';

class FieldContainer extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <div className={classnames(
        'field-container',
        { 'is-disabled': this.props.disabled,
          'is-touched': this.props.touched,
          'is-required': this.props.required,
          'is-dirty': this.props.dirty,
          'has-focus': this.props.focused,
          'has-value': this.props.empty,
          'has-label': this.props.label,
          'fixed-label': this.props.fixedLabel },
        this.props.className
      )}>
        <div className="field-container__input">
          {this.props.children}
        </div>
        {this.props.label && (
          <div className="field-container__label">
            <span onClick={this.props.onClick} onKeyUp={this.handleKeyPress} role="button" tabIndex={0} >
              {this.props.label}
            </span>
          </div>
        )}
        <BottomLine disabled={this.props.disabled} active={this.props.focused} />
        {this.props.helperText && (
          <div className="field-container__helper-text">
            {this.props.helperText}
          </div>
        )}
        {this.props.errorList && (
          <div className="field-container__error-text">
            {this.props.errorList}
          </div>
        )}
      </div>
    );
  }
}

FieldContainer.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  empty: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fixedLabel: PropTypes.bool,
  helperText: PropTypes.string,
  touched: PropTypes.bool,
  dirty: PropTypes.bool,
  focused: PropTypes.bool,
  onClick: PropTypes.func,
  errorList: PropTypes.node,
  children: PropTypes.node.isRequired
};
FieldContainer.defaultProps = {
  disabled: false,
  required: false,
  fixedLabel: false,
  touched: false,
  dirty: false,
  focused: false,
  empty: false,
  label: '',
  className: '',
  helperText: '',
  errorList: false,
  onClick: () => {}
};

export default FieldContainer;
