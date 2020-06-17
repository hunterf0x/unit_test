import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes';
import './App.css';
import theme from './themes/appTheme';

const childProps = {
  isAuthenticated: false
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
