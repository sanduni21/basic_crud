import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Display from './Component/display'


function App() {
 
  const [state, setState] = useState(0)
  return (
    <div>
     <Display value={state}/>
     <Display value={state}/>
     <Display value={state}/>
     <Display value={state}/>

      <button onClick={()=>{
        setState(state+1)
      }}>
        increment
      </button>
    </div>
  );
}

export default App;
