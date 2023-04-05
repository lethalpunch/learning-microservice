import React, { Fragment, useState } from "react";
import './HelloWorld.css'
const HelloWorld = () => {
    const [text, setText] = useState("Hello");
    

    const fetchVal = (args) => {
        const name = document.getElementById("name").value;
        fetch("http://localhost:8080/api/hello-world/path-variable/" + name)
        .then(res => res.json())
        .then(json => {
            setText(json.message)
        })
    }

    return <Fragment>
        <input id="name" type="text"></input>
        <button type="button" onClick={fetchVal}>Click Me!</button>
        <br/>
        <p>{text}</p>
    </Fragment>

}

export default HelloWorld;