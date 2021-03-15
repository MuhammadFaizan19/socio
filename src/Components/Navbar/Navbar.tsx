import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

interface NavbarProps {
    isLoggedIn: boolean
}

const navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
    return (
        < div className={classes.Navbar} >
            <div className={classes.NavbarLogo}>
                <img
                    alt=''
                    src='../../assets/imgs/logo.jpg'
                    width='60px'
                    height='50px'
                    className='d-inline-block align-top'
                />{' '}
                {!isLoggedIn && <NavLink className={classes.BrandName} to='/' ><i>SOCIO</i></NavLink>}
            </div>

            {!isLoggedIn &&
                <div className={classes.NavbarLinks} >
                    <NavLink activeClassName={classes.active} to='/contact' >Contact</NavLink>
                    <NavLink activeClassName={classes.active} to='/about' >About</NavLink>
                    <NavLink activeClassName={classes.active} to='/login' >Login</NavLink>
                </div>
            }
            {isLoggedIn &&
                <div className={`${classes.NavbarLinks} ${classes.loggedIn}`} >
                    <NavLink activeClassName={classes.active} to='/feed' >Feed</NavLink>
                    <NavLink activeClassName={classes.active} to='/notifications' >Notifications</NavLink>
                    <NavLink activeClassName={classes.active} to='/search' >Search</NavLink>
                    <NavLink activeClassName={classes.active} to='/profile' >Profile</NavLink>
                    <NavLink activeClassName={classes.active} to='/logout' >Logout</NavLink>
                </div>
            }


        </div >
    )
}

export default navbar;