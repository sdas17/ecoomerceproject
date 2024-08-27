import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Restcard ,{withPromotesd} from './RestCard';
import Shimmer from '../component/Shimmer-ui';
import {
    SWIGGY_API_URL,
    SWIGGY_REST_API_PATH,
} from '../hooks/Apicalling';

const Body = () => {
    // State variables
    const [listOfResturant, setListOfResturant] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    console.log('body render ',listOfResturant);
    

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // HOC for RestaurantCard with discount offer
    const RestaurntCard=withPromotesd(Restcard)

    // Fetch restaurant data from API
    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        const restaurants = eval("json?." + SWIGGY_REST_API_PATH);
        setListOfResturant(restaurants);
        setFilterData(restaurants);
    };

    // Handle search functionality
    const handleSearch = () => {
        const filteredRestaurants = listOfResturant.filter((res) =>
            res?.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterData(filteredRestaurants);
    };

    // Handle top-rated filtering
    const handleTopRated = () => {
        const topRated = listOfResturant.filter(
            (res) => res.info.avgRating >= 4.4
        );
        setFilterData(topRated);
    };

    return listOfResturant.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className='px-11 ' >
                <div className="search m-4 p-4 flex items-center" >
                    <input
                        type="text"
                        placeholder="Search restaurants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border border-solid border-black  rounded-lg'
                    />
                    <button onClick={handleSearch} className='px-4 py-2 bg-green-100 m-4'>Search</button>
                    <button onClick={handleTopRated} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 m-4">
                        Top Rated Restaurants
                    </button>


                </div>
                <div className=" flex flex-wrap    ">
                    {filterData.map((restaurant) => (
                    
                        
                        <Link key={restaurant?.info?.id} to={"/resturantMenu/" + restaurant?.info?.id}>


                            {/* here u write here resturant is promiting add promoted level */}

                            {
                                restaurant?.info.aggregatedDiscountInfoV3 ? <RestaurntCard {...restaurant?.info}/>:  <Restcard {...restaurant?.info} />
                            }
                          
                          
                        </Link>
                    ))}                          

                </div>
            </div>
        </>
    );
};


export default Body;
