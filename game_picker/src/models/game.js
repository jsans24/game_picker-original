import axios from 'axios';
const url = `http://localhost:4000/games/`

class GameModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}${id}`);
    return request;
  };
};

export default GameModel;
