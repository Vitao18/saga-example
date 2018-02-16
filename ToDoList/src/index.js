import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import App from './Components/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
  document.getElementById('root'),
  )
}
  
render(App)
  
  // Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./Components/App', () => { render(App) });
