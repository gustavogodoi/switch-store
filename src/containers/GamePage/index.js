import React, { Component } from 'react';
import Header from '../../components/Header/index';
import GameInfo from '../../components/GameInfo/index';

export class GamePage extends Component {
  render() {
    return (
      <div className="gamepage-master">
        <div className="gamepage-header">
          <Header />
          <GameInfo />
        </div>
      </div>
    );
  }
}

export default GamePage;
