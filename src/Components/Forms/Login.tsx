import React from 'react'
import classes from './Styles.module.css';

const login: React.FC = () => {
    return (
        <div className={classes.Container}>
            <form>
                <span className={classes.TextCenter}>LOGIN</span>
                <div className={classes.InputContainer}>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className={classes.InputContainer}>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <button type="button" className={classes.Btn}>login</button>
            </form>
        </div>
    )
}

export default login;