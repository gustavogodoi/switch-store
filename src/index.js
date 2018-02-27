import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const renderApplication = (App, store) => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

const { store } = configureStore();

renderApplication(App, store);

registerServiceWorker();
