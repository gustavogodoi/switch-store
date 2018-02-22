import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import ListPage from '../../containers/ListPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ListPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
