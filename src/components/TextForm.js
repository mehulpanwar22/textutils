import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
  }

  const handleCopy = ()=>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  //text = "new text";    //Wrong way to set new text
  //setText("new text"); // Right way to set new text

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy To Clipboard</button>

    </div>
    <div className="container my-3"  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
