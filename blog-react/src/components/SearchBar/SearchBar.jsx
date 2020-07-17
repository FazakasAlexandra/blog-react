import React from 'react'
import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './searchBar.css'

export function SearchBar(props) {
    return(
        <span id="serach-container">
            <input type="text"
                id='search-bar'
                placeholder="Search..."
                onChange={(e) => props.search(e)} />
            <FontAwesomeIcon icon="search" />
        </span>
    )
}