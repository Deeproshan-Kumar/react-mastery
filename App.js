import React from "react";
import ReactDOM from "react-dom/client";

{/* 
    <div id="parent">
        <div id="children">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
        </div>
    </div>
*/}

// const heading = React.createElement("h1", { class:"heading", id: "heading" }, "Hello World!"); // tag, attributes, content

const html = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"children"}, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(html);