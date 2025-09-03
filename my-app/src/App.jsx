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
      sameerCounter(0); 
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
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl rounded-md" alt="" src="https://officetemplatesonline.com/cover-page-templates-formats-for-any-type-of-project/" />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>

      
    </>
  );
}

export default App;
