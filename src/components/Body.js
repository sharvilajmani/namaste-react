import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //Local State variable
    //Whenever state variable updates, react triggers reconciliation cycle(re-renders the component)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredrestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("UseEffect called");
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you are offline !!! Please check your internet connection.
            </h1>
        );
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        setFilteredrestaurant(listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => {
                        return res.info.avgRating > 4.4;
                    });
                    setFilteredrestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
}

export default Body;