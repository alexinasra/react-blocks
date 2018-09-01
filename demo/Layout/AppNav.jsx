import React from 'react';
import type { Node } from 'react';
import { I18n } from 'react-i18next';

import Nav, { NavRouterLink, NavMenu } from '@components/Nav';
import Menu, { MenuItem } from '@components/Menu';

import type LocaleContext from '@context/LocaleContext';
import { LocaleContextConsumer } from '@context/LocaleContext';
import Scrollbar from '@components/Scrollbar';

export default (): Node => (
  <LocaleContextConsumer>
    {
      (localeContext: LocaleContext): Node => (
        <I18n>
          {
            (t: (string) => string, { i18n }: { [key: string]: mixed }): Node => (
              <Scrollbar>
                <Nav direction="column"
                  className="app_nav">
                  <NavRouterLink
                    iconName="dashboard"
                    label={t('Navigations.Home.label')}
                    to={`/${localeContext.lng}`} />
                  <NavRouterLink
                    iconName="ballot"
                    label={t('Navigations.Form.label')}
                    to={`/${localeContext.lng}/form`} />
                  <NavMenu
                    iconName="dashboard"
                    label="Ui Components">
                    <NavRouterLink
                      iconName="ballot"
                      label="Ui Buttons"
                      to={`/${localeContext.lng}/ui-buttons`} />
                    <NavRouterLink
                      iconName="ballot"
                      label="Ui Nav"
                      to={`/${localeContext.lng}/ui-nav`} />
                  </NavMenu>
                </Nav>
              </Scrollbar>
            )
          }
        </I18n>
      )
    }
  </LocaleContextConsumer>
);
