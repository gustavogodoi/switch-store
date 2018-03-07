import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';
import ListPage from '../../containers/ListPage';
import GamePage from '../../containers/GamePage';
import AboutPage from '../../containers/AboutPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/game/:slug" component={GamePage} />
          <Route exact path="/about-us" component={AboutPage} />
          <Route path="/" component={ListPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
