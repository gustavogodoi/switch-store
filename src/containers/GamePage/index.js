import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadGameListRequest } from '../../actions';
import GameInfo from '../../components/GameInfo';

class GamePage extends Component {
  componentDidMount() {
    if (!this.props.gameList || !this.props.gameList.length) {
      this.props.loadGameListRequest();
    }
  }

  render() {
    let game = {};
    if (this.props.gameList && this.props.gameList.length) {
      game = this.props.gameList.find(game => game.slug === this.props.match.params.slug)
    }
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="gamepage-master">
        <div className="gamepage-header">
          <GameInfo game={game} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    gameList: state.reducers.gameList,
    loading: state.reducers.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  loadGameListRequest: () => dispatch(loadGameListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
