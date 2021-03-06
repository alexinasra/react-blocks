/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';

import classnames from 'classnames';
import Icon from '@components/Icon';

type RadioOption = {
  key: string,
  label: string,
  value: mixed
};

type RadioProps = {
  className?: string,
  options: Array<RadioOption>,
  value: RadioOption,
  onChange: (e: SyntheticEvent) => void | boolean,
  [string]: mixed
};

export default class Radio extends Component<RadioProps> {
  static defaultProps: RadioProps ={
    className: undefined
  };

  constructor(props: RadioProps) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  props: RadioProps;

  handleKeyDown(e: SyntheticEvent) {
    if (e.key.startsWith('Arrow')) {
      const { value, options, onChange } = this.props;
      const findIdx = (o: RadioOption): boolean => (
        value && (value.key === o.key)
      );
      let i = options.findIndex(findIdx);

      switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        if (i === 0) {
          i = options.length - 1;
        } else {
          i -= 1;
        }
        break;
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        if (i === options.length - 1) {
          i = 0;
        } else {
          i += 1;
        }
        break;
      }
      default:
      }

      if (onChange) {
        onChange(options[i]);
      }
    }
  }

  render(): Node {
    const {
      value,
      options,
      className,
      onChange,
      ...props } = this.props;
    const items = options.map((option: RadioOption) => {
      if (option.label) {
        return (
          <div key={option.key}
            className="radio-option"
            role="radio"
            tabIndex={value && (option.key === value.key) ? 0 : -1}
            aria-checked={value && (option.key === value.key)}
            onClick={() => { onChange(option); }}
            onKeyDown={this.handleKeyDown}>
            <Icon name={
              value && (option.key === value.key)
                ? 'radio_button_checked' : 'radio_button_unchecked'
            } />
            <span className="label">
              {option.label}
            </span>
          </div>
        );
      }
      return undefined;
    });
    return (
      <div role="radiogroup" tabIndex={0} className={classnames('radio', className)} {...props}>
        {items}
      </div>
    );
  }
}
