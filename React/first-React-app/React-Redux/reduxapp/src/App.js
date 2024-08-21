import React from 'react'
import "./App.css"
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './Actions/index.js';
const App=()=>{
  const myState=useSelector((state)=>state.changeTheNumber);

const dispatch=useDispatch();
  return(
    <>
  <div class="container">
    <h1>Increment/Drecrement counter</h1>
    <h4>using react and redux</h4>

    <div class="quantity">
      <a clsss="quantity_minus" title="Decrement"
      onClick={()=>dispatch(decNumber())}><span>-</span></a>
      <input name="quaintity" type="text" class="quaintity__input" value="0"></input>
       
      <a class="quantity__plus" title="Increment"
        onClick={()=>dispatch(incNumber())}><span>+</span></a>
    </div>
  </div>
  </>
  )
}
export default App;