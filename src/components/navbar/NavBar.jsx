import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"

function NavBar (){
    return(
        <nav className="navBar">
            <section className="nav-header">
                <Link className="nav-link"to={"/"}>
                    < img src="https://trello.com/1/cards/65f92e9190ad46baa763a9a9/attachments/65f92f3085bd4df25f395459/previews/65f92f3085bd4df25f3954eb/download/image.png" className="img-url"/>
                </Link> 

            </section>
            <section className="nav-sub">
                <Link className="nav-link"to={"/journals"}>All Entries</Link>
                <Link className="nav-link"to={"/journals/new"}>Create A Entry</Link>
                <Link classNme="nav-link"to={"/journals/Search"}>Search Entries</Link>
                <Link className="nav-link"to={"/journals/about"}>About the Developer </Link>
            </section>
        </nav>
    )
}

export default NavBar