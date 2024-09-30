# Githib push commands
git add .
git commit -m "Your message here"
git push

/* 
React Element
JSX  ==> Bbael transpiles it to React.createElement() (coverted by Babel in Parcel) - JsObject ==> HTMLElement
JSX is like HTMLElement but it is neither HTML nor React.
*/

// const jsxheading = (<div id="parent">
//     <div id="child">
//         <h1 id="heading">Namaste React using JSX</h1>
//     </div>
// </div>)
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);

/* 
React Component - 2 Types
1. Class-based component - OLD
2. Functional component - NEW (Normal javascript function)
*/
-------------x------------------x-------------
import React from "react";
import ReactDOM from "react-dom/client";

const Element =(                      //react element
    <h1 className="element">This is a react element passed in component using curly brackets </h1>
)

const Title = () =>(                  //react component 
    <h1 className="title">Title</h1>
)
const Headingcomponent = ()=>(
    <div id="parent">
        {Element}
        <Title />
        <div id="child"> 
            <h1 id="heading">Namaste React using Functional Component</h1>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />); //Rendering a React Component.

<!-- 
/** 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestraurantCard
 *     -Img
 *     -Name of Res, Star Rating, Cuisine, delivery time
 * Footer
 * - Copyright
 * - Address
 * - Contact
 */ -->


#Named Export - Allows to export multile files from same file.
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" ;

export const LOGO_URL = "https://img.freepik.com/premium-vector/shopping-logo-design_646665-153.jpg?w=360";



# React_Hooks
(Normal JS utility function)
- useState() - Superpowerful State Variables in React.
- useEffect()

