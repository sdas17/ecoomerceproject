import Restcard from "./Restcard"
import resturnatListData from '../../utils/mockData';
import { useState } from 'react';

const Body = () => {
    // state Vaible - super Powefull varible
    const [listOfResturant,setlistOfResturant]=useState(resturnatListData)
    return (
        <>
            <div className="card-body">
                <div className="search" style={{ padding: "12px" }}>
          <button className="btn-btn-search" onClick={()=>{
            let restUrantData= resturnatListData.filter((res)=>res.data.avgRating >4)
            
            setlistOfResturant(restUrantData)
          }}>Search</button>
                </div>
                    <div className="res-container">
                        {/* { restaurantList.map((resturantdata)=>{
                            console.log(resturantdata.data.id,resturantdata);

                            return  <Restcard   key={resturantdata.data.id} {...resturantdata.data}/>
                        })

                        } */}
                        {
                            listOfResturant.map((resturnat)=>( <Restcard key={resturnat.data.id} {...resturnat.data}></Restcard>))
                        }
                       
                        

                </div>

            </div>
        </>
    )
}

export default Body