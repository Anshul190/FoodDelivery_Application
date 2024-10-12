import RestraurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockdata";
import { Link } from "react-router-dom";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [ListofRestraunts, setListofRestraunts] = useState([ ]);
    const [SearchText, setSearchText] = useState("");
    const [filteredListofRestraunts, setfilteredListofRestraunts] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66590&lng=77.00440&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setListofRestraunts(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListofRestraunts(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(data); //display API data in console.
    };

    if (ListofRestraunts.length === 0){
        return <Shimmer/>;
    }

    // Ternary Operater
    return  (
        <div className="Body">
            <div className="filter">
                <div className="search-component">
                    <input type="text" className="search-box" value={SearchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search" onClick={() => {

                        const filteredRestraunts = ListofRestraunts.filter(
                            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                        )
                        setfilteredListofRestraunts(filteredRestraunts)

                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = ListofRestraunts.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setfilteredListofRestraunts(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container"> 
                {filteredListofRestraunts.map((restaurant, index) => (
                    <Link to = {"/restaurant/" + restaurant.info.id}><RestraurantCard key={restaurant.info.id} resData={restaurant} /></Link>
                ))};
            </div>
        </div>
);
};

export default Body;