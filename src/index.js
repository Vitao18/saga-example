import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
  document.getElementById('root'),
  )
}
  
render(App)
  
  // Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => { render(App) });
