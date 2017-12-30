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
import Form, { TextField, TextArea } from '../src/components/Form';
import GridLayout, { GridRow, GridColumn } from '../src/components/GridLayout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isMainMenuOpen: false,
      ratingVal: 0

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
        <Card>
          <Toolbar>
            <ToggleIcon onName="arrow_drop_up"
              offName="arrow_drop_down"
              onToggle={this.handlePrimaryMenuToggle} />
          </Toolbar>
          <CardSection>
            <Form onSubmit={() => {}}>
              <GridLayout>
                <GridRow>
                  <GridColumn span={2}>
                    <TextArea label="First Name" />
                  </GridColumn>
                </GridRow>
              </GridLayout>
            </Form>
          </CardSection>
        </Card>
      </div>
    );
  }
}
export default App;
