import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setbtnName] = useState('Login');

    return(
        <div className = "header">
            <div className = "logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact">
                        Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/Cart">
                        Cart
                        </Link>
                    </li>
                    <button className="login" 
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