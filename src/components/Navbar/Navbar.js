import React, {useState} from 'react'

import {Link} from 'react-router-dom'

import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill/>Estate</span>Ship</h1>
                <button className='btn'>Sign In</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/">
                        <li><a>Home</a></li>
                    </Link>
                    <Link to="/search">
                        <li><a>Search</a></li>
                    </Link>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ?
                        (<FaRegTimesCircle className='icon'/>)
                        :
                        (<HiOutlineMenuAlt4 className='icon'/>) 
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar