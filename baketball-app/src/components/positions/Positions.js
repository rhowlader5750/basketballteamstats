import React, { useEffect, useState } from 'react';
import positionData from "../../data/positions.json";
import { Link } from 'react-router-dom';
import Loader from "react-loaders";

const Positions = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [filterPosition, setFilteredPosition] = useState([])

    useEffect(()=>{
        const filtered = positionData.positions.filter(position =>
            position.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosition(filtered);
    },[searchQuery])

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const renderPosition = (positions) => {
        return (
            <div className="images-container">
                {positions.map((position, idx) => (
                    <div key={idx} className="image-box">
                        <img src={position.cover} alt="positions" className="teams-image" />
                        <div className="content">
                            <p className="title">{position.title}</p>
                            <Link className="btn" to={`/data?positions=${encodeURIComponent(position.search)}`}>
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    

    return (
            <>
                <div className="container teams-page">
                <h1 className = "page-title">
                        Here are the Positions
                    </h1>
                    
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for positions"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div>{renderPosition(filterPosition)}</div>
                </div>
                <Loader type="pacman"/>
            </>
        );
}

export default Positions