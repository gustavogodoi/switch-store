import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Header from '../Header';
import ListPage from '../../containers/ListPage';
import GamePage from '../../containers/GamePage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/game/:slug" component={GamePage} />
          <Route path="/" component={ListPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
