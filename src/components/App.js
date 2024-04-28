
import React, { useEffect, useState } from "react";
import './../styles/App.css';
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const App = () => {
  const[inputValue, setInputValue]=useState("");
  const [suggestedArray, setSuggestedArray]=useState([...fruits]);

  console.log(suggestedArray);
  useEffect(()=>{
    setTimeout(()=>{
    let array=fruits.filter(fruit=>fruit.includes(inputValue));
    setSuggestedArray(array);
    }, 500)
  }, [inputValue])
  return (
    <div>
       <h1>Search item</h1>
       <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
       <div>
        <ul>
          {
            suggestedArray.map(fruit=><li key={fruit}>{fruit}</li>)
          }
        </ul>
       </div>
    </div>
  )
}

export default App
