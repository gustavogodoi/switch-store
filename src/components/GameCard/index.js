import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.scss';

const GameCard = ({ game }) => {
  return (
    <div className="game-master">
      <div className="game-box">
        <Link to={`/game/${game.slug}`} className="game-image-wrapper">
          <img className="game-image" src={game.front_box_art} alt="" />
        </Link>
        <div className="game-title">{game.title}</div>
        <div className="game-price">
          {game.ca_price && `U$ ${game.ca_price}`}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
