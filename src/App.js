import './App.css';
import {  useState, useEffect } from 'react';

function App () {
  const [data, setData] = useState(null);
  useEffect (()=>{
    fetch(
      'https://api.github.com/users/sujeetmainali'
    ).then((response)=> response.json())
    .then(setData)
  },[])
  if(data)
    return(
      <pre>{JSON.stringify(data, null, 10)}</pre>
      //data is the data and null, 10 is the formatting of the json to make it readable
    )
  return (
    <div className="App">
        <h1>data</h1>
       
    </div>
  )
}


export default App;
