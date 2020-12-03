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

  static findCollection = (profile) => {
    let request = axios.get(`${url}findcollection/${profile}`)
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

  static update = (usersGame, updatedGame) => {
    let request = axios.put(`${url}${usersGame._id}`, updatedGame);
    return request;
  };
};

export default UsersGameModel;
