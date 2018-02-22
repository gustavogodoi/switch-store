import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import ListPage from '../../containers/ListPage';
import Header from '../Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ListPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
