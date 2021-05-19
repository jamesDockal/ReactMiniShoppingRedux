import ReactDOM from 'react-dom';

import App from './App';

import {Provider} from 'react-redux'

import { createStore } from 'redux'

import productsReducer from './store/products'

const store = createStore(productsReducer)

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>, 
  document.getElementById('root')
);

  