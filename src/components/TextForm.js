import React,{useState}from 'react'

function TextForm(props) {
    const handleUpEvent=()=>{
        // console.log("Button is triggered!" +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success")
    }
     const handleLcEvent=()=>{
        // console.log("Button is triggered!" +text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success")
    }
    const hanndleOnChange=(event)=>{
        // console.log("onChange");
        setText(event.target.value);
    }
    const handleUpEventReset=()=>{
        setText("");
    }
    const handleCopyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copy to clipboard","success");
    }
    const removeExtraText=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removing extra spaces","success")
    }
    
    const[text,setText]=useState("Enter text here...");
    // text="Updated text"; //Wrong way to update the state value.
    // setText("Updated text to be use");//Right way to use state.
    return (
        <div className="container my-4" style={{color:props.mode==='white'?'black':'white'}}> 
                <div className="mb-5 ">
                    <h4>{props.title}</h4>
                    <textarea className="form-control my-4" id="exampleFormControlTextarea1" rows="8" value={text} onChange={hanndleOnChange} style={{backgroundColor:props.mode==='white'?'white':'black',color:props.mode==='white'?'black':'white'}}></textarea>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleUpEvent} disabled={text.length===0}>Convert To Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary  my-2 mx-2" onClick={handleLcEvent}>Convert To Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy Text</button>
                     <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={removeExtraText} >Remove Extra spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpEventReset}>Reset</button>

                </div>
                <div className="container">
                    <h1>Your text summary</h1>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
                    <h2>Preview the text</h2>
                    <p>{text.length>0?text:"Noting to preview!"}</p>
                </div>
        </div>
    )
}

export default TextForm
