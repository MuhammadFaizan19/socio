import React from 'react'
import Profile from '../Profile/Profile'
import classes from './Search.module.css'
import SearchResult from './SearchResult/SearchResult'

const search: React.FC = () => {
    return (
        <div className={classes.Container} >
            <div className={classes.Search} >
                <div className={classes.searchBox}>
                    <input className={classes.searchInput} type="text" placeholder="Search" />
                    <button className={classes.searchButton}>
                        <i className="material-icons">search</i>
                    </button>
                </div>
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
            </div>
            <div className={classes.SearchResult} >
                <Profile/>
            </div>

        </div>
    )
}

export default search