import React from 'react';
import classNames from 'classnames';
import type { Node } from 'react';

import Toolbar from '@components/Toolbar';

import LanguageSelect from './LanguageSelect';
import AppNav from './AppNav';

type AppToolbarProps = {
  stage: 'top' | 'scroll'
};

const AppToolbar = ({ stage }: AppToolbarProps): Node => (
  <Toolbar
    className={
      classNames(
        'app_toolbar',
        `on-${stage}`
      )
    }
    logo={(
      <span>
        React Blocks
      </span>
    )}
  >
    <AppNav />
    <div className="separator" />
    <LanguageSelect />
  </Toolbar>
);

export default AppToolbar;
