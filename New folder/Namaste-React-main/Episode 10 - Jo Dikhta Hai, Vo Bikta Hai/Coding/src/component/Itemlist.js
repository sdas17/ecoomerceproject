import { IMG_CDN_URL } from "../hooks/Apicalling";


const Itemlist = ({itemlist})=>{
    console.log(itemlist);
    
    return (
        <div>
            <h2>Categoryitem</h2>
            <ul>
                {
                    itemlist.map(item =>
                        
                        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-black border-b-2 flex justify-between gap-2	">
                            <div className="w-9/12">
                            <div className="px-2">
                                <span>{item.card.info.name}</span>
                                <span> -₹ {item.card.info.price / 100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                            </div>

                            <div className="w-3/12 p-4">
                        
                                <div className="absolute">
                                <button className="p-2 mx-7 rounded-lg bg-white color-white shadow-lg   ">Add+</button>

                                </div>
                                <img
                                    className=" object-cover rounded-[8px] "
                                    src={IMG_CDN_URL + item.card.info.imageId}
                                    alt={name}
                                />
                            </div>



                        </div>
                        
                    
                    )
                    
                }
                
            </ul>
        </div>
    )
}
export default Itemlist;