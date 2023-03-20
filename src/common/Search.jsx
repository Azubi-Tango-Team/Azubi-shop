import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './nav.css'

function Search() {
  return (
    <>
    <div className="search-container">
      <div className="search-icon">
      <FontAwesomeIcon icon={faSearch} />
        </div>
        <input type="text" class="search-input" placeholder="Search products"></input>
      </div>
    </>
  )
}

export default Search