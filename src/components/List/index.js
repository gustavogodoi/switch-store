import React from 'react';
import GameCard from '../GameCard';
import './List.scss';

const List = ({ games }) => {
  return (
    <div>
      <div className="list">
        {games.map(game => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default List;
