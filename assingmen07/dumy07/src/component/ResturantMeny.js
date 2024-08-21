import { useEffect } from "react";

const ResturantMeny =()=>{
    useEffect(()=>{
    fetchResturant();
    },[])
    // const {id}=useParams();
     const fetchResturant = async ()=>{
        const data = await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=234");
        const response =await data.json();
        console.log(response);
        
    }
    return (
        <>
        <ul>
            <li>Briyani</li>
            <li>Cofee</li>
            <li>Chai</li>

        </ul>
        </>
    )
}
export default ResturantMeny;