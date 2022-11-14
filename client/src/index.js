import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fontsource/source-sans-pro"; 

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';

import store from './app/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


