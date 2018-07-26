import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store';

import App from './App';
import i18n from './i18n';

// Create browser history to use in the Redux store
const history = createBrowserHistory();

const store = configureStore(history, {});


ReactDOM.render(
  <AppContainer>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  </AppContainer>, document.getElementById('root')
);
