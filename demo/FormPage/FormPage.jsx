import React from 'react';
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

const FormPage = (): Node => (
  <I18n>
    {
      (t: (string) => string): Node => (
        <div>
          <Form>
            <GridLayout>
              <GridRow>
                <GridColumn span={4}>
                  <TextField
                    name="full_name"
                    type="text"
                    label={t('Views.Form.fullName')} />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn span={4}>
                  <TextField
                    name="email"
                    type="email"
                    label={t('Views.Form.email')} />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn span={4}>
                  <TextField
                    name="pwd"
                    type="password"
                    label={t('Views.Form.password')} />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn span={4}>
                  <Button type="submit" label={t('Views.Form.signup')} />
                </GridColumn>
              </GridRow>
            </GridLayout>
          </Form>
        </div>
      )
    }
  </I18n>
);

export default FormPage;
