import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setbtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return(
        <div className = "header , flex justify-between bg-pink-100 shadow-lg  sm:bg-orange-200">
            <div className = "logo-container">
                <img className="logo, w-56" src={LOGO_URL}></img>
            </div>
            <div className = "nav-items, flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 font-bold">
                        Online Status: {onlineStatus ===true ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/About">
                        About
                        </Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/Contact">
                        Contact Us
                        </Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/Grocery">
                        Grocery
                        </Link>
                    </li>
                    <button className="login, font-bold border-b-gray-950 bg-orange-500 rounded-sm px-4 py-0.5" 
                    onClick={() => {
                        btnName === "Login" //Toggle functionality
                         ? setbtnName("Logout")
                         : setbtnName ("Login");
                    }}>
                        {btnName}
                    </button>
                </ul>

            </div>
        </div>
    )
}

export default Header;  