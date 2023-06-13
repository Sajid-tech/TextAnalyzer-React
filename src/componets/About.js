import React  from 'react'


function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor:"black"
        
    // })

    let myStyle ={
        color:props.mode ==='dark'?'white':"#042743",
        backgroundColor: props.mode === 'dark'?'#042743':'white',
        
    }

    // const [btnText, setBtnText] = useState("Enable light Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
                
    //                 color:'black',
    //                 backgroundColor:'white'
                
            
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:"black",
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable light Mode")
    //     }
    // }

  return (
    <div className='container' style={myStyle} >
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextAnalyzer gives you a way to analyze your text quickly and efficently. Be it word count, charachter count 
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextAnalyzer is a free charachter counter tool that provides insatnt charchter countand word count statistics for a given text. textAnalyzer reports the number of words and charchter . thus it is suitable for writing text with word/ charchter limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browser such as chrome, firefox, internet explorer, safari,opera etc. It suits to count charchter in facebook, blog,books ,excel document, pdf document, essay etc.
                    </div>
                </div>
            </div>
            </div>
            {/* for enabling the dark mode */}


            {/* <div className="container">
            <button onClick={toggleStyle} type='button' className='btn btn-primary my-3'>{btnText}</button>
            </div> */}
    </div>
  )
}

export default About