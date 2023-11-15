import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DataTable from './components/DataTable';
import IMAGE from './react.png'
import LOGO from './React.svg'
import './styles.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <h1>
          <img src={IMAGE} alt="React Logo" width="30" height="30" />
            Webpack, Material UI, Typicode, Typescript
          <img src={LOGO} alt="React Logo" width="30" />
          <p>{process.env.NODE_ENV}</p>
        </h1>
      <DataTable />
    </ThemeProvider>
  )
}

export default App