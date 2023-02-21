import './App.css';
import {  useState, useEffect } from 'react';

const himalayas = [
  {name : "sagarmatha", height : 8848.5},
  {name : "Kanchenjungha", height : 8586},
  {name : "Makalu", height : 8481},
  {name : "Manaslu", height : 8156},
];

function List ({data, renderItem, renderEmpty}){
  return !data.length ? renderEmpty :  <ul>
    {data.map((item)=>(
      <li key={item.name}>{renderItem(item)}</li>
    ))}
  </ul> 
}


function App(){
  return (
    <div className="App">
        
       < List
      data={himalayas} 
      renderEmpty = {<p>this lis is empty</p>} 
       renderItem = {(item) => (
       <>
       {item.name} - {item.height} ft.
       </>
  )}
       />
    </div>
  )
}


export default App;
