import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    // upper case the text area
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success")
    }
    
    // lower case the text area
    const handleLoClick=()=>{
      console.log("you have cliked on hanle up down")
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase","success")
    }
    // copy to the clipboard
    const handleCopy=()=>{
      navigator.clipboard.writeText(text)
      props.showAlert("copied to clipboard","success")
    }
    // To clear the text area 
    const handleClear=()=>{
      let newText=''
      setText(newText)
      props.showAlert("clear Text","success")
    }
    //To remove extra spaces
    const handleRemove=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("extra spaces in the text area removed","success")
    }



    // To write in text box area 
    const handleOnChange=(event)=>{
      console.log("on change was clicked")
      setText(event.target.value)
   }

    const [text, setText] = useState('')
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#161740e0'}}>
   <h2 className='mb-3'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'dark':'light'}} value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy to Clipboard</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleRemove}>Remove Extra Space</button>
   
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#161740e0'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words</b> ,{text.length} <b>charachters</b></p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h5>Preview</h5>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}



TextForm.propType ={
    heading: PropTypes.string
}

// export default TextForm aur fucntion ye phle export lga do