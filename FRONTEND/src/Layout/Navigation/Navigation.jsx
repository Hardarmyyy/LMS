import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import Logo from '../Logo/Logo'


const Navigation = () => {

const location = useLocation()

const showNavLinks = location.pathname === '/portal'

return (

<>

    <header className=''>

        <Logo></Logo>

        {showNavLinks && 
            <nav>

                <ul>
                    <li> <NavLink to={``}> payment </NavLink> </li>
                    <li> <NavLink to={``}> student </NavLink> </li>
                    <li> <NavLink to={``}> employee </NavLink> </li>
                </ul>

            </nav>
        }

    </header>

</>

)
}

export default Navigation 