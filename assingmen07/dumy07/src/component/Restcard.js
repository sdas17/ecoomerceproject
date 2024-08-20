import { IMG_CDN_URL } from "../utils/Apicalling";
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
    
    return (
        <>
            <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="Project Screenshot"  className="res-logo"/>
              
                <div className="ratings">
                    <p>{name}</p>
                    <p style={avgRating > 3 ? { color: "green" } : { color: "red" }}>{avgRating}</p>
                </div>

              
                <p>{costForTwo}</p>
          <p>{sla?.deliveryTime} mins</p>
                <p> {cuisines?.join(", ").slice(0, 30)}
                {cuisines?.join(", ")?.length > 30 ? "..." : ""}</p>

            </div>


        </>
    )
}
export default Restcard;