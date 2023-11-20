import React, { useState } from 'react'
import './App.css'

function App() {
  const[value,setValue]=useState('');
  // function to convert positive number to negative and vice versa
  const posNeg=(val)=>{
    if(val<0){
      setValue(Math.abs(value))
    }else{
      setValue(0-Math.abs(value))
    }
  }
  //function to show numbers on screen and handle the errors
  const calculate=(va)=>{
    try {
      setValue(value+va)
    } catch (error) {
      console.log('====================================');
      console.log("error"+error);
      console.log('====================================');
    }
  }
  //function to calculate
  const equal=(valu)=>{
    try {
      setValue(eval(valu))
    } catch (error) {
      console.log('====================================');
      console.log("error"+error);
      console.log('====================================');
    }
  }
  return (
      <div className="container">
        <div className="calculator">
          <form action=""  >
          <div className='display'>
            <input type="text" value={value}/>
          </div>
          <div>
            <input type="button" className='action' value={"AC"} onClick={e=>setValue("")}/>
            <input type="button" className='action' value={"+/-"} onClick={e=>posNeg(value)}/>
            <input type="button" className='action' value={"%"} onClick={e=>calculate(e.target.value)}/>      
            <input type="button" value={"/"} onClick={e=>calculate(e.target.value)}/>
          </div>
          <div>
            <input type="button" className='numbers' value={"7"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" className='numbers' value={"8"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" className='numbers' value={"9"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" value={"*"} onClick={e=>calculate(e.target.value)}/>
          </div>
          <div>
            <input type="button" className='numbers' value={"4"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" className='numbers' value={"5"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" className='numbers' value={"6"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" value={"-"} onClick={e=>calculate(e.target.value)}/>
          </div>
          <div>
            <input type="button" className='numbers' value={"1"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" className='numbers' value={"2"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" className='numbers' value={"3"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" value={"+"} onClick={e=>calculate(e.target.value)}/>
          </div>
          <div>
            <input type="button" className='numbers zero' value={"0"} onClick={e=>calculate(e.target.value)}/>
            <input type="button" className='numbers' value={"."} onClick={e=>calculate(e.target.value)}/>
            
            <input type="button" value={"="} onClick={e=>equal(value)}/>
      
          </div>
          </form>
      </div>
    </div>
  )
}

export default App

