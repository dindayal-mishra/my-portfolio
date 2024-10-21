import React, { useState } from "react";

const NavbarIList = ({data}) => {
    // console.log(data);

    const [btntext,setBtntext]=useState(true)

    console.log(btntext);
    
    
    return (
      <div className="nav">

        <p className="leftnav">dindayal Portfolio</p>

        <ul className="rightnav">

              {data.map((ele,index)=>{
                return(
                    <li key={index}>
                        {ele}
                    </li>
                )
              })}
              
              <button className="darkmodebtn" onClick={()=>{return(setBtntext(!btntext))}}>
                {btntext==false?"light mode on":"dark mode on"}</button>

         
        </ul>
      </div>
    )
  }

  export default NavbarIList