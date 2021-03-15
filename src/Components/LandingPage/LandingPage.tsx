import React from 'react'
import './LandingPage.Styles.css'
import Navbar from '../Navbar/Navbar'

const landingPage: React.FC = () => {
    return (
        <div className='Container' >
            <Navbar isLoggedIn={true} />

        </div>
    )
}

export default landingPage;