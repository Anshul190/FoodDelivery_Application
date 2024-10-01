import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const RestaurantMenu = () =>{

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66590&lng=77.00440&restaurantId=655890&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    }

    if (resInfo === null) {
        return <Shimmer />
    } 

    return(
        <div className="menu">
            <h1> {resInfo?.data?.cards[2]?.card?.card?.info?.name} </h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
};

export default RestaurantMenu;