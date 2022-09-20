// import Button from './components/button';
import {useState} from 'react'

import { evaluate } from 'mathjs';
import Buttons from './components/Buttons'
import Input from './components/input'
import './App.css';

const  App =() =>{

const[text, setText] =useState("");
const[results, setResults] = useState("");

const addToText = (val) => {
setText((text) => [...text, val+ " "]);
};

const calculatzResult = () => {
  const input =text.join("");

  setResults(evaluate(input))
}

const resetInput = () => {
  setText("");
  setResults("");
}
  const buttonColor ="orange";
  return (
    <div className="App">

<div className="calc-wrap">
    <h1>Simple Calculator</h1>
 <Input text={text} results={results} />
  <div className="row">
<Buttons symbol="7" handleClick={addToText} />
<Buttons symbol="8" handleClick={addToText}/>
<Buttons symbol="9" handleClick={addToText}/>
<Buttons symbol="/" color={buttonColor} handleClick={addToText} />
</div>
<div className="row">
<Buttons symbol="4" handleClick={addToText}/>
<Buttons symbol="5" handleClick={addToText}/>
<Buttons symbol="6" handleClick={addToText}/>
<Buttons symbol="*" color={buttonColor}  handleClick={addToText} />
</div>
<div className="row">
<Buttons symbol="1" handleClick={addToText}/>
<Buttons symbol="2" handleClick={addToText}/>
<Buttons symbol="3" handleClick={addToText}/>
<Buttons symbol="+"color={buttonColor} handleClick={addToText} />
</div>
<div className="row">
<Buttons symbol="0" handleClick={addToText}/>
<Buttons symbol="." handleClick={addToText}/>
<Buttons symbol="=" handleClick={calculatzResult}/>
<Buttons symbol="-" color={buttonColor} handleClick={addToText} />
</div>
<Buttons symbol="clear" color="#8da1bd"  handleClick={resetInput} />
</div>
</div>
  );
  // return (
  //   <div className="container">

  //     <form className="form-input">
  //        <h1>LOGIN FORM</h1>
  //       <input type="text" className="bar" placeholder="First name"></input>
  //       <input type="text" className="bar" placeholder="Last name"></input>
  //       <input type="email" className="bar" placeholder="Email" required></input>
  //       <input type="password" className="bar" placeholder="Password"></input>

  //       <div className="btn-container">
  //       <Button name="back" classAttrib="btn back-btn"/>
  //       <Button name="submit" classAttrib="btn submit-btn"/>
  //       {/* <button type="submit" className="btn submit-btn">submit</button> */}
  //       <p>Click the sign in button to agree with<br></br><i>terms of service</i> </p>
  //       </div>
  //     </form>
  //   </div>
  // )
}

export default App;
