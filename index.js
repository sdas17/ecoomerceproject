import React from 'react';
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
const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3VD_fa55t-hJjEgasAu7xNfZOwyoV3Z2ow&s' alt='food-logo' style={{ width: '76px' }}></img>
                </div>
                <div className='nav-link'>
                    <ul style={{ listStyleType: "none", display: "flex" }}>
                        <li style={{ paddingLeft: '20px' }}>Home</li>
                        <li style={{ paddingLeft: '20px' }}>About us</li>
                        <li style={{ paddingLeft: '20px' }}>Contact</li>
                        <li style={{ paddingLeft: '20px' }}>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
const Restcard = (props) => {
    const {resName,cuisins}=props
    return (
        <>
            <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pe1savupw5miak1g0ylt" alt='food-logo' className="res-logo"></img>
                <div style={{ marginLeft: '12px' }}>
                    <h3>{resName}</h3>
                    <h4>{cuisins}</h4>
                    <h4>4.4 stars</h4>
                    <h4>38 minutes</h4>
                </div>


            </div>


        </>
    )
}
const Body = () => {
    return (
        <>
            <div className="card-body">
                <div className="search" style={{ padding: "12px" }}>Search

                </div>
                    <div className="res-container">
                        <Restcard  resName="Megna Food" cuisins="briyani"/>
                        <Restcard  resName="KFC" cuisins="Burger,food chain"/>
                        

                </div>

            </div>
        </>
    )
}
const AppLayout = () => {
    return (
        <>
            {<Header />}
            {Body()}
            {Footer()}
        </>
    )
}
const Footer = () => {
    return (
        <>
        <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
  <p>&copy; 2024 Megna Food. All rights reserved.</p>
</footer>
        </>
    )
}
let dumydata = ReactDOM.createRoot(document.getElementById("root"));
dumydata.render(<AppLayout />);