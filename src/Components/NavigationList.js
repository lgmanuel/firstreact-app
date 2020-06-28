import React from 'react'
import { Link } from "react-router-dom";

function NavigationList(props){
    return (
        <div>
            <div className="font-bold">
                Menu
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" className="text-blue-500 block border-b"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" className="text-blue block border-b"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationList