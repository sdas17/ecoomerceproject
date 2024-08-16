import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import './index.css';

const AppLayout = () => {
    console.log(<Body/>)
    return (
        <>
            {<Header />}
            {<Body/>}
           
        </>
    )
}
let dumydata = ReactDOM.createRoot(document.getElementById("root"));
dumydata.render(<AppLayout />);