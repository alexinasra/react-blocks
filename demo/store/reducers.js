import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import LocaleReducer from './LocaleReducer';

export default combineReducers({
  loading: LoadingReducer,
  locale: LocaleReducer
});
