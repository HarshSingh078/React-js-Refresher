import React from 'react'
import {Link} from "react-router" 
function NavBar() {
  return (
    <div>
        <div>
            <Link to={"/"}><h2>Logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link to={"/login"}><h2>Login</h2></Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar