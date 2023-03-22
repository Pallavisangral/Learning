import React, {useState} from "react";



export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
       // setText(text.toLocaleUpperCase())
       
    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
       // setText(text.toLocaleUpperCase())
       
    }
    const handleClearClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=' ';
        setText(newText)
        props.showAlert("clear text","success");
       // setText(text.toLocaleUpperCase())
       
    }
    const handleOnChange=(e)=>{
        console.log("onchange", e.target.value);
        setText(e.target.value)
        
    }
    const [text, setText] = useState('');
    const handleCopy=()=>{
        console.log("i amcopy");
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("text copied","success");

    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("remove extra spaces","success");

    }
	return (
		<>
        <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
            <h1 className= 'mb-4'>{props.heading} </h1>
            <div className="mb-3">
                <textarea
                    placeholder="Enter text here"
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor:props.mode==='dark'? '#13466e':'white', 
                    color:props.mode==='dark'? 'white':'#042743',}}
                    
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>reduce extra spaces</button>


        </div>
        <div className="container my=3" >
            <h2>your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text :"enter something to preview here"}</p>

        </div>
        </>
	);
}
