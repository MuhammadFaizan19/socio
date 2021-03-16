import React from 'react'
import CreatePost from '../Post/CreatePost/CreatePost'
import Post from '../Post/Post'
import classes from './Feed.module.css'

const feed: React.FC = () => {
    return (
        <div className={classes.Feed} >
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default feed