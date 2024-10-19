import RestraurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockdata";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [ListofRestraunts, setListofRestraunts] = useState([]);
    const [SearchText, setSearchText] = useState("");
    const [filteredListofRestraunts, setfilteredListofRestraunts] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66590&lng=77.00440&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setListofRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListofRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(data); //display API data in console.
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <h1>"You are Offline. Please check your internet connection"</h1>
        );
    };


    if (ListofRestraunts.length === 0){
        return <Shimmer/>;
    }

    // Ternary Operater
    return  (
        <div className="Body">
            <div className="filter, flex">
                <div className="search-component, m-4 p-4">
                    <input type="text" className="search-box, border-black border-solid bg-transparent" value={SearchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search, px-4 py-2 bg-orange-200 m-4 rounded-lg" onClick={() => {

                        const filteredRestraunts = ListofRestraunts.filter(
                            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                        )
                        setfilteredListofRestraunts(filteredRestraunts)
                    }}>Search</button>
                </div>
                <div className="search, px-4 py-2 m-4 flex items-center">
                <button className="filter-btn, rounded-lg bg-orange-200 m-4 px-2 py-2" onClick={() => {
                    const filteredList = ListofRestraunts.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setfilteredListofRestraunts(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                </div>
            </div>

            <div className="res-container, flex flex-wrap px-0.5"> 
                {filteredListofRestraunts.map((restaurant, index) => (
                    <Link to = {"/restaurant/" + restaurant.info.id}><RestraurantCard key={restaurant.info.id} resData={restaurant} /></Link>
                ))};
            </div>
        </div>
);
};

export default Body;