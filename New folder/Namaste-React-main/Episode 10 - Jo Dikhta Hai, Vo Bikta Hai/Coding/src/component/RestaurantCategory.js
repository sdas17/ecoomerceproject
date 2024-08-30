
import { useState } from "react";
import Itemlist from "./Itemlist";
const RestaurantCategory = ({data,showItem,setExpandedItems} ) => {
    console.log(data,'3');
    // const [showitem,useshowitem]=useState("false")

    const handleClick= ()=>{
      console.log();
      setExpandedItems()
      // useshowitem(!showitem)
      
    }
  return (
    <div>
  <div className="w-10/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
  <div className="flex justify-between" onClick={handleClick}>
  <span className="font-bold text-lg ">{data.title} ({data.itemCards.length})</span>
  <span>⬇️</span>
  </div>
     
  {/* body item list  */}
         {showItem && <Itemlist itemlist ={data.itemCards}/> }  
    </div>
    </div>
  
  )
}

export default RestaurantCategory