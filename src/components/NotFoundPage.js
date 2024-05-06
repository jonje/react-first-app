import React from "react";
import {NavLink} from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>
                <NavLink to="/">Back to Home</NavLink>
            </p>
        </div>
    );
}

export default NotFoundPage;