import React from "react";
import { Link } from "react-router-dom";
import GameModel from "../models/game";

class GameIndex extends React.Component {
  state= {
    games: []
  }

  componentDidMount() {
    GameModel.all().then((res) => {
      this.setState({
        games: res.data.games,
      });
    });
  };

  render() {
    const gamesList = this.state.games.map((game) => (
      <Link key={game._id} to={`/games/${game._id}`}><li>{game.title}</li></Link>
    ))
    return (
      <>
        <ul>
          {gamesList}
        </ul>
      </>
    )
  }
}

export default GameIndex;
