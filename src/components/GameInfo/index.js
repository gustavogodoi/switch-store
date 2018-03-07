import React from 'react';
import './GameInfo.scss';

const GameInfo = ({ game }) => {
  return (
    <div className="gamepage-master">
      <div className="gamepage-title">{game.title}</div>
      <div className="gamepage-image">
        <img className="the-image" alt="" src={game.front_box_art} />
      </div>
      <div className="gamepage-release">
        Data de Lançamento: {game.release_date}
      </div>
      <div className="gamepage-price">
        Preço: {game.ca_price && `U$ ${game.ca_price}`}
      </div>
      <div className="gamepage-youtube-title">
        <h1>Youtube:</h1>
      </div>
      <div className="gamepage-youtube">
        <img
          className="youtube-image"
          alt=""
          src="https://www.torcedores.com/content/uploads/2017/06/super-mario-odyssey-2.jpg"
        />

        <img
          className="youtube-image"
          alt=""
          src="https://www.torcedores.com/content/uploads/2017/06/super-mario-odyssey-2.jpg"
        />

        <img
          className="youtube-image"
          alt=""
          src="https://www.torcedores.com/content/uploads/2017/06/super-mario-odyssey-2.jpg"
        />

        <img
          className="youtube-image"
          alt=""
          src="https://www.torcedores.com/content/uploads/2017/06/super-mario-odyssey-2.jpg"
        />
      </div>
    </div>
  );
};

export default GameInfo;
