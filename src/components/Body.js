import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    //Local State variable
    //Whenever state variable updates, react triggers reconciliation cycle(re-renders the component)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredrestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const { setUserName, loggedInUser } = useContext(UserContext);

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
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        data-testid="searchInput"
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        setFilteredrestaurant(listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => {
                            return res.info.avgRating > 4.4;
                        });
                        setFilteredrestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>UserName :</label>
                    <input
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {restaurant?.info?.promoted === undefined ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;