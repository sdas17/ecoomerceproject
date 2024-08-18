import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import './index.css';
const ApplayOut =()=>{
    return (<>
    {Header()}
    {Body()}
    {Footer()}
    
    </>)
}
let dumydata = ReactDOM.createRoot(document.getElementById("root"));
dumydata.render(<ApplayOut />);