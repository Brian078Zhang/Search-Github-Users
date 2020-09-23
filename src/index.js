import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GitHubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-w-tnxs8v.au.auth0.com
//fbhFdu7rT5SiEGme6LWodRATyOqOSWYl

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-w-tnxs8v.au.auth0.com'
      clientId='fbhFdu7rT5SiEGme6LWodRATyOqOSWYl'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'>
      <GitHubProvider>
        <App />
      </GitHubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
