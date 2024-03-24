import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    })

    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
            {categories.map((category, index) => (
                //Controlled component
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItem={index === showIndex && true} setShowIndex={() => setShowIndex(index)} />
            ))}
        </div>
    )
}

export default RestaurantMenu;