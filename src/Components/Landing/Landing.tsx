import React from 'react'
import classes from './Landing.module.css'
import { Link } from 'react-router-dom'


const landing: React.FC = () => {
    return (
        < div className={classes.Main} >
            <div className={classes.Name} >
                <h1>Socio</h1>
                <h3>Breaking Barriers!</h3>
            </div>
            <div>
                <Link className={classes.BtnLink} to='/signup' ><button className={classes.RegisterBtn} >Register</button></Link>
            </div>
        </div>
    )
}

export default landing