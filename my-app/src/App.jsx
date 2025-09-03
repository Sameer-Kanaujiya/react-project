import { useState } from "react";
import Chai from "./chai";

function App() {
  const [counter, sameerCounter] = useState(0); //hooks item

  const addvalue =()=>{
    console.log("value add", Math.random());
     if (counter < 10) {   // stop at 10
      sameerCounter(counter + 1);
    }
    
  }
  const removevalue = ()=>{
    if (counter==0){
      sameerCounter=0
    }else {
      sameerCounter(counter -1);
    }
    
  }

  return (
    <>
      <Chai />
      <h1>Good Morning!!</h1>
      <p>Counter value:{counter}</p>
      <button onClick={addvalue}>AddValue</button>
      <button onClick={removevalue}>remove value</button>
      
    </>
  );
}

export default App;
