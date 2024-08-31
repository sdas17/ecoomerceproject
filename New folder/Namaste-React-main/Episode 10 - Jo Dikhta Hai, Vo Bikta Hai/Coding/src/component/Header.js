import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlieStatus from "../hooks/UseOnlineStatus.js";
import UseDumy from '../hooks/UseDumy';
const Header =()=>{
    const [btnNamereact,setBtname]=useState("Login")
    console.log('render');
    const onlineStatus=useOnlieStatus();
    const  {firstName} = useContext(UseDumy);
    console.log(firstName);
    

    return (
        <>
        <div className='flex justify-between bg-pink-100 shadow-lg ' >
            <div className='image '>
                <img className="w-24 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3VD_fa55t-hJjEgasAu7xNfZOwyoV3Z2ow&s' alt='food-logo' ></img>
            </div>
            <div  className="flex items-center">
                <ul className="list-none flex p-4 m-4">
                <li>onlineStatus:{onlineStatus ? "🟢":"🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                        <li className="px-4">
                            <Link to="/About">About us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/grocery">Groceery</Link>
                        </li>

                    <li className="px-4">  <Link to="/About">Contact</Link></li>
                    <li className="px-4"> <Link to="/Cart">Cart</Link></li>
                    <li style={{paddingLeft:'17px'}}>
                        <button className="btn-style" onClick={(()=>{
                             btnNamereact === 'Login' ? setBtname('Logout') : setBtname('Login')
                        })}>{btnNamereact}</button>
                    </li>
                    <li className="px-4 font-black">{firstName}</li>
                </ul>
            </div>
        </div>
    </>    )
}
export default Header;