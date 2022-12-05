import {useState} from 'react'
import React from 'react'

function Count() {

    const [count, setCount] = useState(0)
    
    function addOneToCount() {
      setCount(count + 1)
    }
  
    function addFiveToCount() {
      setCount(count + 5)
    }
  
    function addTenToCount() {
      setCount(count + 10)
    }
  
    function resetCount() {
      setCount(0)
    }
  
    return (
      <div className="Count">
        <h1><b>Count til you can't count no more</b></h1>
        
        <div className='buttons-parent'>
          <button className = "buttons" onClick={addOneToCount}> + 1 </button>
          <button className = "buttons" onClick={addFiveToCount}> + 5 </button>
          <button className = "buttons" onClick={addTenToCount}> + 10 </button>
        </div>

        <h2> {count} </h2>
        
        <button className = "buttons" id="reset-button" onClick={resetCount}> <b> RESET!!! ⚠️ </b> </button>
      </div>
    );
  }

  export default Count;
  