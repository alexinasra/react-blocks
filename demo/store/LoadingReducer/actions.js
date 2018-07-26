type LoadingState = {
  isLoading: boolean
};
export default LoadingState;

export type LoadingBeginAction = {
  type: 'LOADING_BEGIN'
};
export type LoadingEndAction = {
  type: 'LOADING_END'
};

export type LoadingAction = LoadingBeginAction | LoadingEndAction;

export function LoadingBegin(): LoadingBeginAction {
  return { type: 'LOADING_BEGIN' };
}

export function LoadingEnd(): LoadingEndAction {
  return { type: 'LOADING_END' };
}
