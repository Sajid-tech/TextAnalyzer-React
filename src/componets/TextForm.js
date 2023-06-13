import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("on change was clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState('enter text here')
    
  return (
    <>
   <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
    </>
  )
}


TextForm.propType ={
    heading: PropTypes.string
}

// export default TextForm aur fucntion ye phle export lga do