import React from "react";
import { Link } from "gatsby";

export default function HeaderNav() {

    return (
        <>
            <ul className="menu">
                <li className="menu"><Link to="/">Home</Link></li>
                <li className="menu"><Link to="/history">History</Link></li>
                <li className="menu"><Link to="/about">About</Link></li>
            </ul>
        </>
    );

}