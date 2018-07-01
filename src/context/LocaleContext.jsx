import React from 'react';

const { Provider, Consumer } = React.createContext({
  lang: 'en',
  direction: 'ltr',
  currency: 'USD',
  timeFormat: 'hh:mm',
  dateFormat: 'dd/mm/yyy'
});

export {
  Provider as LocaleContextProvider,
  Consumer as LocaleContextConsumer
};
