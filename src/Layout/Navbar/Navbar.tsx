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
                <NavLink className={`${classes.BrandName} ${classes.Link}` } to='/' ><i>SOCIO</i></NavLink>
            </div>

            {!isLoggedIn &&
                <div className={classes.NavbarLinks} >
                    <NavLink className={classes.Link}  to='/contact' >Contact</NavLink>
                    <NavLink className={classes.Link}  to='/about' >About</NavLink>
                    <NavLink className={classes.Link}  to='/signup' >Signup</NavLink>
                    <NavLink className={classes.Link}  to='/login' >Login</NavLink>
                </div>
            }
            {isLoggedIn &&
                <div className={`${classes.NavbarLinks} ${classes.loggedIn}`} >
                    <NavLink className={classes.Link}  to='/feed' >Feed</NavLink>
                    <NavLink className={classes.Link}  to='/notifications' >Notifications</NavLink>
                    <NavLink className={classes.Link}  to='/search' >Search</NavLink>
                    <NavLink className={classes.Link}  to='/profile' >Profile</NavLink>
                    <NavLink className={classes.Link}  to='/logout' >Logout</NavLink>
                </div>
            }


        </div >
    )
}

export default navbar;