import React from "react";

export default function Card({color1, breakpoint1, color2, breakpoint2, color3, breakpoint3, rotation}) {

    //linear-gradient(rotation turn, color1 breakpoint1, color2 breakpoint2, color3 breakpoint3)

    let test = "linear-gradient("+rotation+"turn, "+color1+" " + breakpoint1 + "%, "+ color2 +" " + breakpoint2 +"%, " + color3 + " " + breakpoint3 +"%)";

    let test2 = rotation;

    console.log(test);

    return (

            <div style={{background: test, height: "200px", display: "flex", justifyContent: "center", alignItems: "center", color: "white"}}>
                {test}
            </div>
    )
}