import React from 'react'
import Navigation from './Navigation'

function Header (){
    return (
        <header className="flex justify-between items-center p-5 border-b">
            <span className="font-bold ">
                askTheva
            </span>
            
            <Navigation />                
        </header>
    )
}

export default Header