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
import Form, { TextField, TextArea, Select, Checkbox, CheckboxGroup, Radio } from '../src/components/Form';
import GridLayout, { GridRow, GridColumn } from '../src/components/GridLayout';
import Menu, { MenuItem } from '../src/components/Menu';
import Dropdown from '../src/components/Dropdown';

import { VerticalScrollbarThumb, HorizontalScrollbarThumb } from '@components/Scrollbar/ScrollbarThumb';
import { ThemeContextProvider } from '@context/ThemeContext';

import Demo from './Demo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isMainMenuOpen: false,
      ratingVal: 0,
      boolVal: true,
      boolval2: true,
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
      <ThemeContextProvider value={{ themeName: 'default', mode: 'ligth' }}>
        <div>
          <VerticalScrollbarThumb height={100} />
          <HorizontalScrollbarThumb width={100} />
        </div>
        <div id="DEMO_APP">
          <GridLayout>
            <GridRow>
              <GridColumn span={6}>
                <Scrollbar style={{ width: '300px', height: "100px" }} >
                  <div style={{ width: '310px' }}>
                    <p>Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up.</p>
                    <p>Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.</p>
                    <p>If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs.</p>
                  </div>
                </Scrollbar>
              </GridColumn>
            </GridRow>
          </GridLayout>
          <Form>
            <Select
            value={this.state.value}
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
            <span id="myLabel">Select Checkboxes</span>
            <CheckboxGroup labelledBy="myLabel">
              <Checkbox checked={this.state.boolVal}
                onChange={(boolVal) => { this.setState({ boolVal }); }}
                label="Unckecked Checkbox" />
              <Checkbox checked='mixed'
                onChange={(boolVal) => { this.setState({ boolVal }); }}
                label="Unckecked Checkbox" />
              <Checkbox checked={this.state.boolVal2}
                disabled
                onChange={(boolVal2) => { this.setState({ boolVal2 }); }}
                label="Ckecked Checkbox" />
            </CheckboxGroup>
            <Radio options={[
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
            ]} value={this.state.value} onChange={(value) => this.setState({ value })} />
          </Form>
        </div>
      </ThemeContextProvider>
    );
  }
}
export default App;
