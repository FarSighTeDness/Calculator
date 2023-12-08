import { useState } from 'react';
import './App.css';

const App = () => {
const [result,setResult]=useState("")
const clickHandler=(event)=>{
setResult(result.concat(event.target.value))

}
const clearDilplay =()=>{
  setResult("");
}

const calculate=()=>{
  setResult(eval(result).toString());
}
  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="9"className="button" onClick={clickHandler}/>
      <input type="button" value="8"className="button" onClick={clickHandler}/>
      <input type="button" value="7"className="button" onClick={clickHandler}/>
      <input type="button" value="*"className="button" onClick={clickHandler}/>
      <input type="button" value="6"className="button" onClick={clickHandler}/>
      <input type="button" value="5"className="button" onClick={clickHandler}/>
      <input type="button" value="4"className="button" onClick={clickHandler}/>
      <input type="button" value="-"className="button" onClick={clickHandler}/>
      <input type="button" value="1"className="button" onClick={clickHandler}/>
      <input type="button" value="2"className="button" onClick={clickHandler}/>
      <input type="button" value="3"className="button" onClick={clickHandler}/>
      <input type="button" value="+"className="button" onClick={clickHandler}/>
      <input type="button" value="="className="button" onClick={calculate}/>
      <input type="button" value="C"className="button" onClick={clearDilplay}/>
      <input type="button" value="."className="button" onClick={clickHandler}/>
      <input type="button" value="/"className="button" onClick={clickHandler}/>
    </div>
  );
};

export default App;

