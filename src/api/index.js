class GamesApi {
  static getGameList() {
    return fetch('http://localhost:3001/api/games')
      .then(response => {
        return response.json().then(r => r);
      })
      .catch(error => {
        return error;
      });
  }
}

export default GamesApi;
