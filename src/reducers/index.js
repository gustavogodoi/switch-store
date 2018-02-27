import * as actions from '../actions';

const initialState = {
  gameList: [],
  loading: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_GAME_LIST_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.LOAD_GAME_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        gameList: action.result,
      });
    default:
      return state;
  }
};

export default reducers;
