import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Shimmer from '../component/Shimmer-ui';
import { MENU_API } from '../hooks/Apicalling';
import styles from './Menu.module.css';
import UserCusotomhook from "../hooks/UserCusotmhook";
import { IMG_CDN_URL } from "../../../../public/common/constants";
import { MdStarRate } from "react-icons/md";
import RestaurantCategory from "./RestaurantCategory";

const ResturantMeny = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const { resId } = useParams();
  const navigate = useNavigate();
const resInfo =UserCusotomhook(resId);




  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage,cloudinaryImageId,totalRatingsString,sla,locality,avgRatingString } = resInfo?.cards?.[2]?.card?.card?.info || {};
  const cards =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  console.log(cards);
  

const categories = cards.filter(
  (c) =>
    c?.card?.["card"]?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
  

  

  
 
  
  
  
  




  return (
   <>
<div className="w-[60%] mx-auto my-4">
      <div className="w-full flex items-center bg-black text-white shadow-md p-[20px] rounded-[8px] mb-[30px] overflow-hidden">
        <img
          className="w-[250px] h-[150px] object-cover rounded-[8px] mr-[40px] hover:scale-[1.1] transition-transform duration-300 ease-in-out"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <div className="flex flex-col justify-center gap-[5px">
          <h1 className="text-[20px] font-bold">{name}</h1>
          <h3 className="text-[#bcbcbc] font-semibold text-[17px]">
            {locality}
          </h3>
          <p className="text-[15px] text-[#c1b9b9]">{cuisines?.join(", ")}</p>

          <h4 className="text-[#eceaea] flex gap-[20px] font-semibold">
            <div className="flex items-center">
              <MdStarRate
                className="w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[5px]"
                style={ avgRatingString > 4.0
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              />
              <span>
                {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
              </span>
            </div>
            <span>|</span>
            <span className="time">{sla?.slaString}</span>
          </h4>
        </div>
      </div>

            {/* Category Accordians */}
            <h2>Menu</h2>
                  {/* Category Accordians */}
  
                  {categories.map((category, index) => (
                    console.log(category),
                    
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}

        />
      ))}


     
    </div>
   
   </>
  );
};

export default ResturantMeny;