import type LocaleContext from '@context/LocaleContext';
import type {
  LoadingAction
} from '../LoadingReducer/actions';
import {
  LoadingBegin,
  LoadingEnd
} from '../LoadingReducer/actions';

type LocaleState = {
  localeContext: LocaleContext,
  pageName: string
};
export default LocaleState;
export type ChangeLanguageAction = {
  type: 'CHANGE_LANGUAGE',
  lng: string
};

export type PageTranslationBeginAction = {
  type: 'PAGE_TRANSLATION_BEGIN',
  pageName: 'Home' | 'Form'
};
export type PageTranslationEndAction = {
  type: 'PAGE_TRANSLATION_END'
};

export type PageTranslationAction =
  | PageTranslationBeginAction
  | PageTranslationEndAction
  | LoadingAction;

export type LocaleAction =
  | ChangeLanguageAction
  | PageTranslationAction;

type GetState = () => State;
type PageTranslationDispatch = (action: PageTranslationAction) => mixed;
type PageTranslationThunk = (dispatch: PageTranslationDispatch, getState: GetState) => mixed;


export function ChangeLanguage(lng: string): ChangeLanguageAction {
  return {
    type: 'CHANGE_LANGUAGE',
    lng
  };
}

function PageTranslationBegin(pageName: string): PageTranslationBeginAction {
  return {
    type: 'PAGE_TRANSLATION_BEGIN',
    pageName
  };
}

function PageTranslationEnd(): PageTranslationEndAction {
  return {
    type: 'PAGE_TRANSLATION_END'
  };
}

export function PageTranslation(page: string): PageTranslationThunk {
  return (dispatch: PageTranslationDispatch, getState: GetState) => {
    dispatch(LoadingBegin());
    dispatch(PageTranslationBegin(page));

    setTimeout(() => {
      dispatch(PageTranslationEnd());
      dispatch(LoadingEnd());
    }, 200);
  };
}
