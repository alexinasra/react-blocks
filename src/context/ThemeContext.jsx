/* @flow */
import React from 'react';

const { Provider, Consumer } = React.createContext({
  themeName: 'default',
  mode: 'ligth'
});

export {
  Provider as ThemeContextProvider,
  Consumer as ThemeContextConsumer
};
