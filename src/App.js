
import './App.css';
import { useState } from 'react'
import Form from './components/Form';
import ForecastRender from './components/ForecastRender';




function App() {

  const [ result, setResult ] = useState('')

  return (
    <div className="app">


      <Form setResult={setResult}/>
      {
        result === 'Error' ?
        <p className='error mt'>The city has not been found.</p> :
        <ForecastRender data={result}/>
      }
    </div>

  );
}

export default App;
