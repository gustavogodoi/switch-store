import React, { Component } from 'react';
import Header from '../../components/Header';
import GameInfo from '../../components/GameInfo';

export class GamePage extends Component {
  render() {
    return (
      <div className="gamepage-master">
        <div className="gamepage-header">
          <GameInfo />
        </div>
      </div>
    );
  }
}

export default GamePage;
