
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion]  = useState('happy');

  useEffect( () =>{
    console.log(`the current emotion is ${emotion}`)
  })
  return (
    <div className="App">
      
        <h1>Current emotion is {emotion}</h1>
      <button onClick={()=>{setEmotion('sad')}}>
        sad
      </button>

      <button onClick={()=>{setEmotion('excited')}}>excited</button>
       
    </div>
  );
}

export default App;
