import  CaptureImage from '../../utils/config/Capture.png'; 

const Restcard = ({
    name,
    cloudinaryImageId,
    area,
    cuisines,
    lastMileTravelString,
    costForTwoString,
    address,
    avgRating,
  }) => {
    
    return (
        <>
            <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img src={CaptureImage} alt="Project Screenshot"  className="res-logo"/>
                {/* <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        className="res-logo"
      /> */}
                <div className="ratings">
                    <p>{name}</p>
                    <p style={avgRating > 3 ? { color: "green" } : { color: "red" }}>{avgRating}</p>
                </div>

              
                <p>{costForTwoString}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{lastMileTravelString} minutes</p>

            </div>


        </>
    )
}
export default Restcard;