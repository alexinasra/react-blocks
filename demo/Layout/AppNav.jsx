import React from 'react';
import type { Node } from 'react';
import { I18n } from 'react-i18next';

import Nav, { NavRouterLink } from '@components/Nav';

import type LocaleContext from '@context/LocaleContext';
import { LocaleContextConsumer } from '@context/LocaleContext';


export default (): Node => (
  <LocaleContextConsumer>
    {
      (localeContext: LocaleContext): Node => (
        <I18n>
          {
            (t: (string) => string, { i18n }: { [key: string]: mixed }): Node => (
              <Nav direction="row"
                className="app_nav">
                <NavRouterLink
                  label={t('Navigations.Home.label')}
                  to={`/${localeContext.lng}`} />
                <NavRouterLink
                  label={t('Navigations.Form.label')}
                  to={`/${localeContext.lng}/form`} />
              </Nav>
            )
          }
        </I18n>
      )
    }
  </LocaleContextConsumer>
);
