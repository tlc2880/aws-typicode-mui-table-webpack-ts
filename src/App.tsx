import { ThemeProvider, createTheme } from '@mui/material/styles';
import DataTable from './components/DataTable';
import { CssBaseline, Container } from '@mui/material'
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
          <DataTable />
        </Container>
    </ThemeProvider>
    
  )
}

export default App