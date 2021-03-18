import React from 'react'
import Post from '../../Components/Post/Post'
import classes from './Profile.module.css'
import User from '../../Components/User/User'

const profile: React.FC = () => {
    return (
        <div className={classes.Container} >
            <User />
            <Post/>
        </div>
    )
}

export default profile