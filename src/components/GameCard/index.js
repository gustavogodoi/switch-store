import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
  return (
    <div className="game-master">
      <div className="game-box">
        <div className="game-image-wrapper">
          <img className="game-image" src={game.front_box_art} />
        </div>
        <div className="game-title">{game.title}</div>
        <div className="game-price">{game.ca_price}</div>
      </div>
    </div>
  );
};

export default GameCard;
