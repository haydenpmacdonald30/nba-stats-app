import React from 'react'
import Player from '../components/Player';
import Search from '../components/Search';
import './PlayersPage.css';

const Players = () => {
    return (
        <div>
            <Search />
            <div className='player--container'>
                <Player />
            </div>
        </div>
    )
}

export default Players
