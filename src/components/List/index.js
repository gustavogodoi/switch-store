import React from 'react';
import GameCard from '../GameCard';
import './List.css';

const List = ({ games }) => {
  return (
    <div>
      <h1>Games</h1>
      <div className="list">
        {games.map(game => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default List;
