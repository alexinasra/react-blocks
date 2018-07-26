/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import type {
  Store,
  StoreEnhancerStoreCreator
} from 'redux';
import thunk from 'redux-thunk';
import {
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import { createLogger } from 'redux-logger';
import History from 'history';
import reducers from './reducers';

const logger = createLogger();


function configureStore(history: History, initialState: mixed): Store {
  // Build middleware. These are functions that can process the actions before they reach the store.
  const windowIfDefined = typeof window === 'undefined' ? null : window;
  // If devTools is installed, connect to it
  const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;

  const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger
      )
    ),
    devToolsExtension
      ? devToolsExtension()
      : (next: StoreEnhancerStoreCreator): StoreEnhancerStoreCreator => next
  );
  // Enable Webpack hot module replacement for reducers

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(connectRouter(history)(nextRootReducer));
    });
  }


  return store;
}

export default configureStore;
