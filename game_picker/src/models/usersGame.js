import axios from 'axios';
const url = `http://localhost:4000/usersgames/`

class UsersGameModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };
  
  static find = (game, profile) => {
    let request = axios.get(`${url}find/${game}/${profile}`);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}${id}`);
    return request;
  };

  static create = (usersGame) => {
    let request = axios.post(url, usersGame);
    return request;
  };

  static delete = (usersGame) => {
    let request = axios.delete(`${url}${usersGame._id}`);
    return request;
  };

  static update = (usersGame) => {
    let request = axios.put(`${url}${usersGame._id}`, usersGame);
    return request;
  };
};

export default UsersGameModel;
