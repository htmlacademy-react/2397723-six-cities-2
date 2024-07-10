import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuth, fetchFavorites, fetchOffers } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffers());
store.dispatch(checkAuth());
store.dispatch(fetchFavorites());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode >
);

