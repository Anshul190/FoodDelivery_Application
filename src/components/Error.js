import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error-page">
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/">Go back to home</a><br/>
            {err.status}: {err.statusText}
            
        </div>
    )
}

export default Error;