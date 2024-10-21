import React from "react";
import NavbarIList from "./NavbarList";

const Navbar=()=>{

    const navlist=["about","skills","project"]
    return(
        <>
            <NavbarIList data={navlist}/>
        </>
    )
}

export default Navbar