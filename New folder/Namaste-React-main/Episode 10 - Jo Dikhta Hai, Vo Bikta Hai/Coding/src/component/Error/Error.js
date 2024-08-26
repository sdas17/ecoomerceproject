import { useRouteError } from "react-router-dom";

const Error =()=>{
    let data =useRouteError();
    console.log(data)
    return (
        <>Error element</>
    )
     
}
export default Error;