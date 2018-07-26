import type LocaleContext from '@context/LocaleContext';
import type LocaleState, { LocaleAction } from './actions';

function getLocaleContext(lng: string): LocaleContext {
  if (lng === 'ar') {
    return {
      lng: 'ar',
      direction: 'rtl',
      currency: 'USD',
      timeFormat: 'hh:mm',
      dateFormat: 'dd/mm/yyy'
    };
  }
  return {
    lng: 'en',
    direction: 'ltr',
    currency: 'USD',
    timeFormat: 'hh:mm',
    dateFormat: 'dd/mm/yyy'
  };
}

export default function (
  state: LocaleState = {
    localeContext: {
      lng: 'en',
      direction: 'ltr',
      currency: 'USD',
      timeFormat: 'hh:mm',
      dateFormat: 'dd/mm/yyy'
    },
    pageName: 'Home'
  },
  action: LocaleAction | { type: string, [key: string]: mixed }
): LocaleState {
  switch (action.type) {
  case 'CHANGE_LANGUAGE':
    return Object.assign(
      {},
      { ...state },
      {
        localeContext: getLocaleContext(action.lng)
      }
    );
  default:
    return state;
  }
}
