import React from 'react'
import classes from './Post.module.css'

const post: React.FC = () => {
    return (
        <div className={classes.Container} >
            <div className={classes.PostedBy} >
                <img alt='' src='https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80' />
                <p>Muhammad Faizan <span>16 Mar, 2021</span> </p>
            </div>
            <div className={classes.Post} >
                <p>This view is mesmerizing...</p>
                <img alt='' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9f/bc/57/hunza-serena-inn.jpg?w=900&h=-1&s=1' />
            </div>
            <div className={classes.PostBtns} >
                <button>Like</button>
                <button>Share</button>
            </div>
        </div>
    )
}

export default post