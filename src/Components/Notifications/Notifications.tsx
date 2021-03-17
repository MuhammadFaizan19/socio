import React from 'react'
import Notification from './Notification/Notification'
import classes from './Notifications.module.css'

const notifications: React.FC = () => {
    return (
        <div className={classes.Container} >
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
        </div>
    )
}

export default notifications
