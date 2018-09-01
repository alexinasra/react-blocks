import React, { Component } from 'react';
import type { Node } from 'react';
import { I18n } from 'react-i18next';

import Button from '@components/Button';
import Form, {
  TextField
} from '@components/Form';
import GridLayout, {
  GridRow,
  GridColumn
} from '@components/GridLayout';
import List, { ListItem } from '@components/List';
import Dropdown from '@components/Dropdown';
import Menu, { MenuItem } from '@components/Menu';

type FormPageProps = {};
class FormPage extends Component<FormPageProps> {
  constructor(props: FormPageProps) {
    super(props);

    this.state = {
      fullName: '',
      email: ''
    };

    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleFullNameChange(fullName: string) {
    console.log(fullName);
    this.setState({ fullName });
  }

  handleEmailChange(email: string) {
    this.setState({ email });
  }

  render(): Node {
    const { fullName, email } = this.state;

    return (
      <I18n>
        {
          (t: (string) => string): Node => (
            <GridLayout>
              <GridRow>
                <GridColumn span="grow">
                  <Dropdown
                    direction="down"
                    ref={(ref: Node) => { this.dropdown1 = ref; }}
                    menu={(
                      <Menu>
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                      </Menu>
                    )}
                    >
                    <Button label="click" onClick={() => { this.dropdown1.open(); }} />
                  </Dropdown>
                  <Dropdown
                    direction="up"
                    ref={(ref: Node) => { this.dropdown2 = ref; }}
                    menu={(
                      <Menu>
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                      </Menu>
                    )}
                    >
                    <Button label="click" onClick={() => { this.dropdown2.open(); }} />
                  </Dropdown>
                  <Dropdown
                    direction="upLeft"
                    ref={(ref: Node) => { this.dropdown3 = ref; }}
                    menu={(
                      <Menu>
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                        <MenuItem icon="menu" label="DropdownItem" />
                      </Menu>
                    )}
                    >
                    <Button label="click" onClick={() => { this.dropdown3.open(); }} />
                  </Dropdown>
                </GridColumn>
                <GridColumn span={8}>
                  <Form>
                    <List>
                      <ListItem>
                        <TextField
                          name="full_name"
                          type="text"
                          value={fullName}
                          onChange={this.handleFullNameChange}
                          label={t('Views.Form.fullName')} />
                      </ListItem>
                      <ListItem>
                        <TextField
                          name="email"
                          type="email"
                          value={email}
                          onChange={this.handleEmailChange}
                          label={t('Views.Form.email')} />
                      </ListItem>
                      <ListItem>
                        <Button type="submit" label={t('Views.Form.signup')} />
                      </ListItem>
                    </List>
                  </Form>
                </GridColumn>
                <GridColumn span="grow" />
              </GridRow>

            </GridLayout>
          )
        }
      </I18n>
    );
  }
}

export default FormPage;
