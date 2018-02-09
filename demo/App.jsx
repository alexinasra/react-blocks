/* eslint-disable  */

import React, { Component } from 'react';

import Avatar from '../src/components/Avatar';
import Icon, { ToggleIcon } from '../src/components/Icon';
import Button from '../src/components/Button';
import Divider from '../src/components/Divider';
import Card, { CardHeading, CardSection, CardParagraph } from '../src/components/Card';
import Scrollbar from '../src/components/Scrollbar';
import Collapse from '../src/components/Collapse';
import Toolbar from '../src/components/Toolbar';
import GridList, { GridListTile } from '../src/components/GridList';
import Nav, { TabsNav } from '../src/components/Nav';
import Form, { TextField, TextArea, Select } from '../src/components/Form';
import GridLayout, { GridRow, GridColumn } from '../src/components/GridLayout';
import Menu, { MenuItem } from '../src/components/Menu';
import Dropdown from '../src/components/Dropdown';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isMainMenuOpen: false,
      ratingVal: 0,
      boolVal: false,
      value: undefined

    };
    this.index = 0;

    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.handlePrimaryMenuToggle = this.handlePrimaryMenuToggle.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  getClassList() {
    const classes = ['app_root'];
    if (this.state.isMainMenuOpen) classes.push('is-expanded');
    return classes;
  }

  handleMenuButtonClick() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  }
  handlePrimaryMenuToggle(event) {
    this.setState({ isMainMenuOpen: !this.state.isMainMenuOpen });
  }

  getNext() {
    this.index += 1;
    return this.index;
  }
  render() {
    return (
      <div id="DEMO_APP">
        <Form>
          <Select value={this.state.value}
          label="select"
          onSelect={(value) => this.setState({ value })}
          items={[
            {key:'empty', label:'', value: ''},
            {key:'a', label:'a', value: 'a'},
            {key:'b', label:'b', value: 'b'},
            {key:'d', label:'d', value: 'd'},
            {key:'e', label:'e', value: 'e'},
            {key:'f', label:'f', value: 'f'},
            {key:'g', label:'g', value: 'g'},
            {key:'h', label:'h', value: 'h'},
            {key:'i', label:'i', value: 'i'},
            {key:'j', label:'j', value: 'j'},
            {key:'k', label:'k', value: 'k'},
            {key:'l', label:'l', value: 'l'},
            {key:'m', label:'m', value: 'm'},
          ]} />
        </Form>
      </div>
    );
  }
}
export default App;
