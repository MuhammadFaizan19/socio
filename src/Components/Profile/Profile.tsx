import React from 'react'
import CreatePost from '../Post/CreatePost/CreatePost'
import Post from '../Post/Post'
import classes from './Profile.module.css'
import UserInfo from './User/User'

const profile: React.FC = () => {
    return (
        <div className={classes.Container} >
            <UserInfo />
            <CreatePost />
            <Post/>
        </div>
    )
}

export default profile