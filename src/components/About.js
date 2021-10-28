import React from 'react'

function About(props) {

    // const [myStyle ,setMyStyle]=useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
    // )
    // const [btnText ,setBtnText]=useState("Enable Dark Mode")
    // const handleEvent=()=>{
    //   if(myStyle.color==='black'){
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor:'black'
    //     })
    //     setBtnText("Enable Light Mode")
    //   }
    //   else{
    //       setMyStyle({
    //         color:'black',
    //         backgroundColor:'white'
    //       })
    //       setBtnText("Enable Dark Mode")
    //   }
    // }
    let myStyle ={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'black':'white',
        border:'1px solid',
        borderColor:props.mode==='dark'?'white':'#616161'
    }

    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3 className=" p-3">About Us</h3>
            <div class="accordion" id="accordionExample" style={{color:props.mode==='dark'?'white':'black'}}>
            <div class="accordion-item" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Overview</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle} >
                    <strong>ReactTestUtils</strong> makes it easy to test React components in the testing framework of your choice. At Facebook we use Jest for painless JavaScript testing. Learn how to get started with Jest through the Jest website’s.
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <strong>References</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>To</strong>  prepare a component for assertions, wrap the code rendering it and performing updates inside an act() call. This makes your test run closer to how React works in the browser.
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                   <strong>Other Utilities</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>Simulate</strong> an event dispatch on a DOM node with optional eventData event data.Simulate has a method for every event that React understands.
                </div>
             </div>
        </div>
        {/* <div className="container my-3 pb-3">
            <button className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
        </div> */}
    </div>
</div>
    )
}

export default About
