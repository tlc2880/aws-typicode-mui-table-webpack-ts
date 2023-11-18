import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material'
import DataTable from './components/DataTable';
import IMAGE from './react.png'
import LOGO from './React.svg'
import './styles.scss';
import { ClickCounter } from './ClickCounter'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
          <h1>
            <img src={IMAGE} alt="React Logo" width="30" height="30" />
              Webpack, Material UI, Typicode, Typescript
            <img src={LOGO} alt="React Logo" width="30" />
            <p>{process.env.NODE_ENV}</p>
          </h1>
        <ClickCounter />
        <DataTable />      
      </Container>
    </ThemeProvider>
  )
}

export default App