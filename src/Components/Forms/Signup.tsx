import React from 'react'
import classes from './Styles.module.css';

const signup: React.FC = () => {
    return (
        <div className={classes.Container}>
            <form>
                <span >SIGNUP</span>
                <div className={classes.InputContainer}>
                    <input type="text" required />
                    <label>First Name</label>
                </div>
                <div className={classes.InputContainer}>
                    <input type="text" required />
                    <label>Second Name</label>
                </div>
                <div className={classes.InputContainer}>
                    <input type="text" required />
                    <label>User Name</label>
                </div>
                <div className={classes.InputContainer}>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className={classes.InputContainer}>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <button type="button" className={classes.Btn}>submit</button>
            </form>
        </div>
    )
}

export default signup;