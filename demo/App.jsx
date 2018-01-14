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
import Menu, { MenuItem } from '../src/components/Menu';
import Dropdown from '../src/components/Dropdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isMainMenuOpen: false,
      ratingVal: 0,
      boolVal: false

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
        <GridLayout>
          <GridColumn span="3">
            <Dropdown open={this.state.boolVal}
              menu={<Menu>
                <div>
                  <Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />
                  <Button label="logout" />
                </div>
                <Divider />
                <MenuItem onClick={() => {console.log('clicked')}} iconName="menu" label="Open file"  shortcut="ctrl-o"/>
                <MenuItem label="Save" shortcut="ctrl-s"/>
                <MenuItem label="Save as" />
                <Divider />
                <MenuItem label="Long long to long item" shortcut="ctrl-s"/>
                <Divider />
                <MenuItem label="Exit" shortcut="alt-f4"/>
              </Menu>}>
              <Button raised className="primary" iconName="menu" onClick={() => { this.setState({ boolVal: !this.state.boolVal}) }} onBlur={() => { setTimeout(() => { this.setState({ boolVal: false}); }, 120) }} />
            </Dropdown>
          </GridColumn>
          <GridColumn span="grow">
            <div className="comments">
              <div className="comment">
                <GridLayout>
                  <GridRow>
                    <GridColumn span="grow">
                      top
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="1">
                      <Avatar src="http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-15.png"/>
                    </GridColumn>
                    <GridColumn span="grow">
                      Improved own provided blessing may peculiar domestic.
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="grow">
                      bottom
                    </GridColumn>
                  </GridRow>
                </GridLayout>
              </div>
              <div className="comment">
                <GridLayout>
                  <GridRow>
                    <GridColumn span="grow">
                      top
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="1">
                      <Avatar src="http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-15.png"/>
                    </GridColumn>
                    <GridColumn span="grow">
                      Improved own provided blessing may peculiar domestic.
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="grow">
                      bottom
                    </GridColumn>
                  </GridRow>
                </GridLayout>
              </div>
              <div className="comment">
                <GridLayout>
                  <GridRow>
                    <GridColumn span="grow">
                      top
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="1">
                      <Avatar src="http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-15.png"/>
                    </GridColumn>
                    <GridColumn span="grow">
                      Improved own provided blessing may peculiar domestic.
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="grow">
                      bottom
                    </GridColumn>
                  </GridRow>
                </GridLayout>
              </div>
              <div className="comment">
                <GridLayout>
                  <GridRow>
                    <GridColumn span="grow">
                      top
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="1">
                      <Avatar src="http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-15.png"/>
                    </GridColumn>
                    <GridColumn span="grow">
                      Improved own provided blessing may peculiar domestic.
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn span="grow">
                      bottom
                    </GridColumn>
                  </GridRow>
                </GridLayout>
              </div>
            </div>
          </GridColumn>
          <GridColumn span="3">
            right
          </GridColumn>
        </GridLayout>
      </div>
    );
  }
}
export default App;
