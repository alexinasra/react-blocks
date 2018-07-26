/* eslint-disable react/prop-types */
/* eslint-disable flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { I18n } from 'react-i18next';

import { Select } from '@components/Form';
import type { SelectItem } from '@components/Form';

const LanguageSelect = ({
  historyPush,
  changeLanguage,
  lng,
  path
}: {
  historyPush: (p: string) => void,
  changeLanguage: (l: string) => void,
  lng: string,
  path: string
}): Node => (
  <I18n>
    {
      (t: (string) => string): Node => (
        <div className="app_nav__lang-select">
          <Select
            items={[
              {
                key: 'en',
                value: 'en',
                label: t('LanguageSelect.en')
              },
              {
                key: 'ar',
                value: 'ar',
                label: t('LanguageSelect.ar')
              }
            ]}
            onSelect={
              (item: SelectItem) => {
                // changeLanguage(item.value);
                const oldLang = path.slice(0, 3);

                historyPush(path.replace(oldLang, `/${item.value}`));
              }
            }
            value={lng} />
        </div>
      )
    }
  </I18n>

);
const mapStateToProps = (state: { default: mixed }): mixed => ({
  lng: state.locale.localeContext.lng,
  path: state.router.location.pathname
});
const mapDispatchToProps = (dispatch: mixed): mixed => ({
  historyPush: (path: string) => { dispatch(push(path)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(LanguageSelect);
