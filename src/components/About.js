import React, { useState } from "react";

export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'2px solid white'
    // })
    // const[btntext,setbtntext]=useState("Enable dark mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'2px solid white'
    //         })
    //         setbtntext("Enable white mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtntext("Enable dark mode")
    //     }
    // }
	let myStyle={
		color:props.mode==='dark'?'white':'#042743',
		backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
		border:'2px solid',
		borderColor:props.mode==='dark'? 'white':'#042743'
	}
	return (
		
		<div className="Container" style={myStyle}>
            <h1 className="my-3">About us</h1>
			<div className="accordion" id="accordionExample"  style={{color:props.mode==='dark'?'white':'#042743'}}/>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
                            style={myStyle}
						>
							<strong>Analyse your text</strong>
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body" style={myStyle}>
							<strong>
								This is the first item's accordion body.
							</strong>{" "}
							TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count,character count or upper case etc 
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
                            style={myStyle}
						>
							<strong>Free to use</strong>
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body" style={myStyle}>
							Textutils is a free character counter tool that provides instant character etc
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
                            style={myStyle}
						>
							<strong>Browser compatible</strong>
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body" style={myStyle}>
							it is browser  compatible too
						</div>
					</div>
				</div>
			
        </div>
	
	);
}

{/* <div className="container my-3">
<button onClick ={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>

</div>) */}
