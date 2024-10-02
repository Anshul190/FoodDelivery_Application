import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const RestaurantMenu = () =>{

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66590&lng=77.00440&restaurantId=38394&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    }

    if (resInfo === null) {
        return <Shimmer />
    } 

    const {name, cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">
            <h1> {name} </h1>
            <p> {cuisines.join(", ")} - {costForTwoMessage} </p>
            <ul>
                <li>{itemCards[0].card.info.name}</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
};

export default RestaurantMenu;