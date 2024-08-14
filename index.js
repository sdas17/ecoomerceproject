import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
// <!-- 
// header
// -img
// -nav
// body
// -search
// -RestaurantContainer
// 1Resturantcard
// footer
// -copyright
// -link
// -address
// -contact




//  -->
const Header = ()=>{
    return (
        <>
        <div className='header'>
            <div className='image'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3VD_fa55t-hJjEgasAu7xNfZOwyoV3Z2ow&s' alt='food-logo' style={{width:'76px'}}></img>
            </div>
            <div className='nav-link'>
             <ul style={{listStyleType:"none",display:"flex"}}>
                <li style={{paddingLeft:'20px'}}>Home</li>
                <li  style={{paddingLeft:'20px'}}>About us</li>
                <li  style={{paddingLeft:'20px'}}>Contact</li>
                <li  style={{paddingLeft:'20px'}}>Cart</li>
                </ul>
            </div>
        </div>
        </>
    )
}
const Body =()=>{
    return (
        <>
        
        </>
    )
}
const AppLayout =()=>{
return (
    <>
    {<Header/>}
    {Body()}
    {Footer()}
    </>
)    
}
const Footer = ()=>{
    return (
        <>
        <h3>footer section</h3>

        </>
    )
}
let dumydata = ReactDOM.createRoot(document.getElementById("root"));
dumydata.render(<AppLayout/>);