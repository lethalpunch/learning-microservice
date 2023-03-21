import React, { useState } from "react";
const HelloWorld = () => {
    const [text, setText] = useState("Hello");
    fetch("http://localhost:8080/hello-world-bean")
    .then(res => res.json())
    .then(json => {
        setText(json.message)
    })
    return text;
}

export default HelloWorld;