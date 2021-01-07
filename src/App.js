import React, { useState } from 'react'
import Form from './components/Form'
import Results from './components/Results'
import './App.css';


function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    password: "",
    passwordConfirm: "",

  });

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Results data={state} />
    </div >
  );
}

export default App;
