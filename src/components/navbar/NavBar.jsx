import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"

function NavBar (){
    return(
        <nav className="navBar">
            <div>
                <Link className="nav-link"to={"/"}>Home</Link>
                <Link className="nav-link"to={"/journals"}>All Entries</Link>
                <Link className="nav-link"to={"/journals/new"}>Add A Entry</Link>

            </div>
            <div className="nav-background">
                
    
            </div>
        </nav>
    )
}

export default NavBar