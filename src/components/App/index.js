import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import ListPage from '../../containers/ListPage';
import Header from '../Header';
import { GamePage } from '../../containers/GamePage/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <div>
            <Route exact path="/" component={ListPage} />
            <Route path="/slug" component={GamePage} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
