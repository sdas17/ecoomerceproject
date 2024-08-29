
import Itemlist from "./Itemlist";
const RestaurantCategory = ({data} ) => {
    console.log(data,'3');

    
  return (
    <div>
  <div className="w-10/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span className="font-bold text-lg ">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
  {/* body item list  */}
           <Itemlist itemlist ={data.itemCards}/>
    </div>
    </div>
  
  )
}

export default RestaurantCategory