import DataTable from './components/DataTable';
import IMAGE from './react.png'
import LOGO from './React.svg'

function App() {

  return (
    <div>
      <h1>
        <img src={IMAGE} alt="React Logo" width="30" height="30" />
          Webpack, Material UI, Typicode, Typescript
        <img src={LOGO} alt="React Logo" width="30" />
        <p>{process.env.NODE_ENV}</p>
      </h1>
      <DataTable />
    </div>
  )
}

export default App