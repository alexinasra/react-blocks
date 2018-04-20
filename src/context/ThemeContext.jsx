import React from 'react';

const { ThemeContextProvider, ThemeContextConsumer } = React.createContext({
  themeName: 'default',
  mode: 'ligth'
});

export default { ThemeContextProvider, ThemeContextConsumer };
