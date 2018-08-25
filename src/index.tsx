import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './components/App';
import './index.css';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
    <App />
  </Provider>
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
