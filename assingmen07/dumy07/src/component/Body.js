import Restcard from "./Restcard"
import resturnatListData from '../utils/Mockdata';
import { useState,useEffect } from 'react';
import {
    SWIGGY_API_URL,
    SWIGGY_REST_API_PATH,
  } from "../utils/Apicalling";
  import Shimmer from '../component/Shimmer-ui';

const Body = () => {
    // state Vaible - super Powefull varible
    const [listOfResturant,setlistOfResturant]=useState([])
    const [filterdata,setfilterdata]=useState([])

    const [listofItem,setlistofItem]=useState("")
    const [restaurantName, setRestaurantName] = useState("");

    useEffect(()=>{
        fetchData();
    },[])
    const setdata = () => {
        console.log(listofItem);
      
        let filterdata = listOfResturant.filter((res) => {
          return res?.info?.name.toLowerCase().includes(listofItem.toLowerCase());
        });
      
        setfilterdata(filterdata);
        // setlistofItem(""); 
        // setRestaurantName(searchRestaurant);

      };
      
    
    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        const restaurants = eval("json?." + SWIGGY_REST_API_PATH) || [];
        setlistOfResturant(restaurants)
        //when i have fetching data update they data
        setfilterdata(restaurants)

      };
    // if (listOfResturant.length === 0) {
    //     return (<Shimmer/>)
    // }
    return listOfResturant.length === 0 ?  (<Shimmer/>) :(
        <>
            <div className="card-body">
                <div className="search" style={{ padding: "12px" }}>
                <input 
  type="text" 
  placeholder="search item" 
  value={listofItem} 
  onChange={(e) => setlistofItem(e.target.value)}
/>
<button onClick={setdata}>Search item</button>
<button className="btn-search" onClick={()=>{
    let restUrantData= filterdata.filter((res)=>res?.info?.avgRating > 4.0);
    console.log(restUrantData);
    setfilterdata(restUrantData);
    setlistOfResturant(restUrantData);
}}> Filter above 4 rating</button>
                </div>
                    <div className="res-container">
                      
                      
                        {
                            filterdata.map((resturnat)=>
                                ( <Restcard key={resturnat?.info?.id}
                                    {...resturnat?.info}></Restcard>)
                        )
                        }
                       
                        

                </div>

            </div>
        </>
    )} 

export default Body