import { useEffect, useState } from "react";
import Shimmer from '../component/Shimmer-ui';
import {MENU_API} from '../utils/Apicalling';
import { useParams } from "react-router-dom";

const ResturantMeny =()=>{
    const [resInfo,setinfo]=useState("null")

    useEffect(()=>{
    fetchResturant();
    },[])
    const {id}=useParams();
     const fetchResturant = async ()=>{
        const data = await  fetch(MENU_API + id);
        const response =await data.json();
        console.log(response,'12');
        setinfo(resInfo.data)
    };
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    if (resInfo === null ) return  <Shimmer/>;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return  (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(" ,")} - {costForTwoMessage}</h2>
        <h2>Menu</h2>
        <ul>
         {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} -{"RS."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
        </ul>


    </div>)
};
export default ResturantMeny;