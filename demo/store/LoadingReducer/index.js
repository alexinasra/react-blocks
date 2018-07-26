import type LoadingState, {
  LoadingAction,
  LoadingBeginAction,
  LoadingEndAction
} from './actions';

export default function (
  state: LoadingState = {
    isLoading: false
  },
  action: LoadingAction | { type: string, [key: string]: mixed }
): LoadingState {
  if (action.type === 'LOADING_BEGIN') {
    return { isLoading: true };
  }
  if (action.type === 'LOADING_END') {
    return { isLoading: false };
  }
  return state;
}
