import React from 'react';
import './GameInfo.css';

const GameInfo = ({ game }) => {
  return <div className="game-title">{game.title}</div>;
};

export default GameInfo;
