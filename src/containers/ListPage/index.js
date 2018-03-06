import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadGameListRequest } from '../../actions';
import List from '../../components/List';

class ListPage extends Component {
  componentDidMount() {
    if (!this.props.gameList || !this.props.gameList.length) {
      this.props.loadGameListRequest();
    }
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return <List games={this.props.gameList} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
