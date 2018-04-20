import React from 'react';

const { LocaleContextProvider, LocaleContextConsumer } = React.createContext({
  lang: 'en',
  direction: 'ltr',
  currency: 'USD',
  timeFormat: 'hh:mm',
  dateFormat: 'dd/mm/yyy'
});

export { LocaleContextProvider, LocaleContextConsumer };
