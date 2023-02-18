
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion]  = useState('happy');
  const [secondary, setSecondary] = useState('tired');

  useEffect( () =>{
    console.log(`the current emotion is ${emotion}`)
  }, [emotion]);

  useEffect (()=>{
    console.log(`the current secondary emotion is ${secondary}`)
  }, [secondary])
  return (
    <div className="App">
      
        <h1>Current emotion is {emotion}</h1>
      <button onClick={()=>{setEmotion('sad')}}>
        sad
      </button>

      <button onClick={()=>{setEmotion('excited')}}>excited</button>
      <h2>current secondary emotion is {secondary}</h2>
      <button onClick={()=>setSecondary('i dont know')}>Dont know</button>
       
    </div>
  );
}

export default App;
