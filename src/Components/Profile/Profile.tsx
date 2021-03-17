import React from 'react'
import Post from '../Post/Post'
import classes from './Profile.module.css'
import UserInfo from './User/User'

const profile: React.FC = () => {
    return (
        <div className={classes.Container} >
            <UserInfo />
            <Post/>
        </div>
    )
}

export default profile