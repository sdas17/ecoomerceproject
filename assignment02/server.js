import React from "react";
import ReactDOM from 'react-dom/client';
//React and ReactDom
//React is creating view ReactDom is rendering component view 
let data = React.createElement("h1", { id: "dumydata" }, "this is subham kumar das 🚀");
let dumydata = ReactDOM.createRoot(document.getElementById("root"));
dumydata.render(data);