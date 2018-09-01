import React from 'react';
import type { Node } from 'react';

import Avatar from '@components/Avatar';
import Icon from '@components/Icon';
import Card, { CardTitle, CardSection } from '@components/Card';
import GridLayout, { GridRow, GridColumn } from '@components/GridLayout';
import Title from '@components/Title';
import Divider from '@components/Divider';


const HomePage = (): Node => (
  <div>
    <Card>
      <CardTitle
        avatar={
          <Avatar src="https://png.pngtree.com/element_pic/00/16/07/0957805d3cce1b4.jpg" />
        }
        title="Contacts"
        />
      <CardSection>
        <GridLayout>
          <GridRow>
            <GridColumn span={1}>
              <Avatar src="https://png.pngtree.com/element_pic/00/16/07/0957805d3cce1b4.jpg" />
            </GridColumn>
            <GridColumn span="grow">
              <Title>
                Customer 1
              </Title>
              <Divider />
            </GridColumn>
            <GridColumn span={1}>
              <Icon name="more_vert" />
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn span={1}>
              <Avatar src="https://png.pngtree.com/element_pic/00/16/07/0957805d3cce1b4.jpg" />
            </GridColumn>
            <GridColumn span="grow">
              <Title>
                Customer 1
              </Title>
              <Divider />
            </GridColumn>
            <GridColumn span={1}>
              <Icon name="more_vert" />
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn span={1}>
              <Avatar src="https://png.pngtree.com/element_pic/00/16/07/0957805d3cce1b4.jpg" />
            </GridColumn>
            <GridColumn span="grow">
              <Title>
                Customer 1
              </Title>
              <Divider />
            </GridColumn>
            <GridColumn span={1}>
              <Icon name="more_vert" />
            </GridColumn>
          </GridRow>
        </GridLayout>
      </CardSection>
    </Card>

  </div>
);

export default HomePage;
