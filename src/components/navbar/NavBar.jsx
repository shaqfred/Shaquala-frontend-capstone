import React from "react";
import { Link } from "react-router-dom";

function NavBar (){
    return(
        <nav className="navBar">
            <div>
                <Link className="nav-link"to={"/"}>Home</Link>
                <Link className="nav-link"to={"/journals"}>All Journals</Link>
                <Link className="nav-link"to={"/journals/new"}>Add A Journal</Link>

            </div>
        </nav>
    )
}

export default NavBar