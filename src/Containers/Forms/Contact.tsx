import React from 'react'
import classes from './Styles.module.css';

const contact: React.FC = () => {
    return (
        <div className={classes.Container}>
            <form>
                <span>CONTACT US</span>
                <div className={classes.InputContainer}>
                    <textarea rows={5} required />
                    <label>Message</label>
                </div>
                <div className={classes.InputContainer}>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <button type="button" className={classes.Btn}>submit</button>
            </form>
        </div>
    )
}

export default contact;