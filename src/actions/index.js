export const LOAD_GAME_LIST_REQUEST = 'LOAD_GAME_LIST_REQUEST';
export const LOAD_GAME_LIST_SUCCESS = 'LOAD_GAME_LIST_SUCCESS';

export const loadGameListRequest = () => ({
  type: LOAD_GAME_LIST_REQUEST,
});

export const loadGameListSuccess = result => ({
  type: LOAD_GAME_LIST_SUCCESS,
  result,
});
