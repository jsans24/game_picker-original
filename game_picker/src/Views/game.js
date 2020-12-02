import React from "react";
import Loading from "../components/loading";
import GameModel from "../models/game";

class GameShow extends React.Component {
  state= {
  }

  componentDidMount() {
    GameModel.getOne(this.props.match.params.id).then((res) => {
      this.setState({
        game: res.data.game,
      });
    });
  };

  render() {
    {if(this.state.game) {
      const date = new Date (this.state.game.releaseDate).toDateString()
      console.log(this.state.game.platforms[0].name);
      return (
        <>
        <h1>{this.state.game.Title}</h1>
        {date}
        <p>{this.state.game.platforms[0].name}</p>
        </>
      )
    } else return null}
  }
}

export default GameShow;