import Restcard from "./Restcard"
import resturnatListData from '../../utils/mockData';

const Body = () => {
    return (
        <>
            <div className="card-body">
                <div className="search" style={{ padding: "12px" }}>Search

                </div>
                    <div className="res-container">
                        {/* { restaurantList.map((resturantdata)=>{
                            console.log(resturantdata.data.id,resturantdata);

                            return  <Restcard   key={resturantdata.data.id} {...resturantdata.data}/>
                        })

                        } */}
                        {
                            resturnatListData.map((resturnat)=>( <Restcard key={resturnat.data.id} {...resturnat.data}></Restcard>))
                        }
                       
                        

                </div>

            </div>
        </>
    )
}

export default Body