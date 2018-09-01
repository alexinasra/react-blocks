import React from 'react';
import classNames from 'classnames';
import type { Node } from 'react';

import Toolbar from '@components/Toolbar';
import Button from '@components/Button';
import LanguageSelect from './LanguageSelect';

type AppToolbarProps = {
  expanded: boolean,
  onMenuToggle: (state: boolean) => void
};

const AppToolbar = ({ expanded, onMenuToggle }: AppToolbarProps): Node => (
  <Toolbar
    className={
      classNames(
        'app_toolbar'
      )
    }
    menuButton={(
      <Button iconName="menu" onClick={() => { onMenuToggle(!expanded); }} />
    )}
  >
    <div className="separator" />
    <LanguageSelect />
  </Toolbar>
);

export default AppToolbar;
