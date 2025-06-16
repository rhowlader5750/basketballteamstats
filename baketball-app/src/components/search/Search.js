import React, { useEffect, useState } from "react";
import Loader from "react-loaders";


const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');

  

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleGoButtonClick = () => {
        window.location.href = `/data?name=${encodeURIComponent(searchQuery)}`;
    };

    return (
        <>
            <div className="container teams-page">
                <h1 className="page-title">
                    <br/>
                    Search for players
                    <br/>
                    
                </h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for players"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleGoButtonClick}>Go</button>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Search;