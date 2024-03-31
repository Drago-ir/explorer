import React, { useState, useEffect } from "react";
import { NavLink as Link } from 'react-router-dom';
import logo from '../img/Namada_Logo.jpg'; // Importing the logo image

function Navbar () {
    const [pageURL, setPageURL] = useState(0);

    useEffect(() => {
        const arrayA = window.location.href.split("/")
        if(arrayA[arrayA.length - 1] === 'blocks' || arrayA[arrayA.length - 2] === 'blocks') {
            setPageURL("BLOCKS");
            document.title = "Namada Explorer - Blocks"; // Set the title for the Blocks page
        } else if (arrayA[arrayA.length - 1] === 'search' || arrayA[arrayA.length - 2] === 'search') {
            setPageURL("SEARCH");
            document.title = "Namada Explorer - Search"; // Set the title for the Search page
        } else if (arrayA[arrayA.length - 1] === 'validators' || arrayA[arrayA.length - 2] === 'validators') {
            setPageURL("VALIDATORS");
            document.title = "Namada Explorer - Validators"; // Set the title for the Validators page
        } else {
            setPageURL("HOME");
            document.title = "Namada Explorer"; // Set the default title
        }
    })

    return (
        <div className='bg-[#212529] p-6 flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <Link onClick={() => {setPageURL("HOME");}} to='/' className={`text-white hover:text-yellow-500`}>
                    <img src={logo} alt="Namada Logo" className="h-8" />
                </Link>
                <h1 className="text-white font-semibold text-lg">
                    <Link onClick={() => {setPageURL("HOME");}} to='/' className={`text-white hover:text-yellow-500`}>
                        Namada Explorer
                    </Link>
                </h1>
            </div>
            <div className='flex-grow flex justify-center'>
                <Link onClick={() => {setPageURL("HOME");}} to='/' className={`text-white hover:text-yellow-500 mx-4 text-lg`}>
                    Home
                </Link>
                <Link onClick={() => {setPageURL("VALIDATORS");}} to='/validators' className={`text-white hover:text-yellow-500 mx-4 text-lg`}>
                    Validators
                </Link>
                <Link onClick={() => {setPageURL("BLOCKS");}} to='/blocks' className={`text-white hover:text-yellow-500 mx-4 text-lg`}>
                    Blocks
                </Link>
                <Link onClick={() => {setPageURL("SEARCH");}} to='/search' className={`text-white hover:text-yellow-500 mx-4 text-lg`}>
                    Search
                </Link>
            </div> 
        </div>
    )
}

export default Navbar;
