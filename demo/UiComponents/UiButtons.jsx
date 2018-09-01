import React from 'react';

import Button from '@components/Button';
import GridLayout, { GridRow, GridColumn } from '@components/GridLayout';


export default (): Node => (
  <GridLayout>
    <GridRow>
      <GridColumn span="grow">
        <Button label="default" />
        <Button label="primary" className="primary" />
        <Button label="secondary" className="secondary" />
        <Button label="success" className="success" />
        <Button label="info" className="info" />
        <Button label="warning" className="warning" />
        <Button label="danger" className="danger" />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span="grow">
        <Button label="default" raised />
        <Button label="primary" className="primary" raised />
        <Button label="secondary" className="secondary" raised />
        <Button label="success" className="success" raised />
        <Button label="info" className="info" raised />
        <Button label="warning" className="warning" raised />
        <Button label="danger" className="danger" raised />
      </GridColumn>
    </GridRow>
  </GridLayout>
);
