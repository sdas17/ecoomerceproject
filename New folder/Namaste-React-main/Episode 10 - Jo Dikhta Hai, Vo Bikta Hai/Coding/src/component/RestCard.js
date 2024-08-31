import { useContext } from "react";
import { IMG_CDN_URL } from "../hooks/Apicalling.js";

import UseDumy from "../hooks/UseDumy.js";
const Restcard = ({
  cloudinaryImageId,
  name,
  areaName,
  sla,
  cuisines,
  costForTwo,
  avgRating,
}) => {
    console.log(sla);
const {firstName}=useContext(UseDumy);


    return (
        <>
            <div className="m-4 p-4 w-[250px] " style={{ backgroundColor: "#f0f0f0" }}>
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="Project Screenshot"  className="rounded-lg" />


                    <h3 className="font-bold py-4 text-xl">{name}</h3>
                    <h3 style={avgRating > 3 ? { color: "green" } : { color: "red" }}>{avgRating}</h3>


                <h3>{costForTwo}</h3>
                <h4>{sla?.deliveryTime} mins</h4>
                <h4> {cuisines?.join(", ").slice(0, 30)}
                    {cuisines?.join(", ")?.length > 30 ? "..." : ""}</h4>
                    <h4>userName:{firstName}</h4>

            </div>


        </>
    )
 
}

export const withPromotesd=()=>{
    return (props)=>{
        const { aggregatedDiscountInfoV3 } = props;
    
        return (
            <div>
                <label className="absolute bg-black text-white m-3 p-4 rounded-lg">{aggregatedDiscountInfoV3.subHeader} || {aggregatedDiscountInfoV3.header}</label>
                <Restcard {...props}/>
            </div>
        )
    }
}


export default Restcard;