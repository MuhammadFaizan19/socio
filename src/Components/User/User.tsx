import React from 'react'
import classes from './User.module.css'

const user: React.FC = () => {
    return (
        <div className={classes.Container} >
            <div className={classes.User} >
                <img alt='' src='https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80' />
                <p>Muhammad Faizan <span>@muhammadFaizan</span></p>
            </div>
        </div>
    )
}

export default user