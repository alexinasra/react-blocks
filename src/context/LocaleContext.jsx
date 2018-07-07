/* @flow */
import React from 'react';

type LocaleContext = {
  lng: string,
  direction: 'ltr' | 'rtl',
  currency: string,
  timeFormat: string,
  dateFormat: string
};
export default LocaleContext;

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
