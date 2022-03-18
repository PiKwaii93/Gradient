import React,{useState} from "react";

export default function Form({setCards, cards}) {

    const [formBreakpoint1, setFirst] = useState(0);
    const [formBreakpoint2, setSecond] = useState(50);
    const [formBreakpoint3, setThird] = useState(100);
    const [formRotation, setRotation] = useState(0)
    const [formColor1, setFirstColor] = useState("#3f87a6");
    const [formColor2, setSecondColor] = useState("#ebf8e1");
    const [formColor3, setThirdColor] = useState("#f69d3c");

    const [counter, setCounter] =React.useState(1);

    
    function reset(){
        setFirst(document.getElementById("breakpoint1").value)
        setSecond(document.getElementById("breakpoint2").value)
        setThird(document.getElementById("breakpoint3").value)
        setRotation(document.getElementById("rotation").value)
        setFirstColor(document.getElementById("color1").value)
        setSecondColor(document.getElementById("color2").value)
        setThirdColor(document.getElementById("color3").value)
        setCounter(counter + 1)
        setCards(
            cacapipi => [{breakpoint1: formBreakpoint1, breakpoint2: formBreakpoint2, breakpoint3: formBreakpoint3, color1: formColor1, color2: formColor2, color3: formColor3, rotation: formRotation, id: counter}, ...cacapipi]
        );
        cards.splice(0, cards.length);
        console.log(formColor1)
        console.log(formColor2)
        console.log(formColor3)
        console.log(formBreakpoint1)
        console.log(formBreakpoint2)
        console.log(formBreakpoint3)
        console.log(formRotation)
        console.log(counter);
    }

    return (
        <div className="container row">
            <div className="col card" style={{padding: "10px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor ="breakpoint1">Breakpoint 1</label>
                    <input type="number" id="breakpoint1" name="breakpoint1" min="0" max="100" defaultValue="0"  value={formBreakpoint1} onChange={reset}/>
                    
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor ="color1">Color 1</label>
                    <input type="color" style={{width: "auto"}}  id="color1" name="color1" value={formColor1} onChange={reset}/>
                    
                </div>
            </div>
            <div className="col card" style={{padding: "10px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor ="breakpoint2">Breakpoint 2</label>
                    <input type="number" id="breakpoint2" name="breakpoint2" min="0" max="100"  defaultValue="50"  value={formBreakpoint2} onChange={reset}/>
                    
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor ="color2">Color 2</label>
                    <input type="color" style={{width: "auto"}} id="color2" name="color2"  value={formColor2} onChange={reset}/>                    
                </div>
            </div>
            <div className="w-100"></div>
            <div className="col card" style={{padding: "10px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor ="breakpoint3">Breakpoint 3</label>
                    <input type="number" id="breakpoint3" name="breakpoint3" min="0" max="100" value={formBreakpoint3} defaultValue="100" onChange={reset}/>
                    
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor ="color3">Color 3</label>
                    <input type="color" style={{width: "auto"}} id="color3" name="color3" value={formColor3} onChange={reset}/>                    
                </div>
            </div>
            <div className="col card" style={{padding: "10px", display: "flex", justifyContent: "center"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor ="rotation">Rotation</label>
                    <input type="range" id="rotation" name="rotation" min="0" max="1" defaultValue="0" value={formRotation} step="0.01"  onChange={reset}/>
                    
                </div>
            </div>
        </div>
        
    )

}