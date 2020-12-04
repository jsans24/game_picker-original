import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import AddGame from "../components/gameCard";
// import Loading from "../components/loading";
import GameModel from "../models/game";
// import { Link } from "react-router-dom";

class GameShow extends React.Component {
  state= {
    game: '',
  }

  componentDidMount() {
    this.fetchData()
      
  }

  fetchData = async () => {
    const gameRes = await GameModel.getOne(this.props.match.params.id);
    const game = gameRes.data.game;
    return (
      this.setState({ game: game })
    )
  }

  consoleRender = () => {
    const consoles = this.state.game.platforms
    const consoleList = consoles.map((consoleObj) => {
      return <li key={consoleObj._id}> {consoleObj.name}</li>
    })
    return consoleList;
  }

  render() {
    if(this.state.game) {
      const date = new Date (this.state.game.releaseDate).toDateString()
      return (
        <div className="gameShow">
          <img src={this.state.game.img} className="gameImage" alt=""/>
          <div className="info-container">
            <div>
              <h1>{this.state.game.title}</h1>
              <h4>Release Date: {date}</h4>
              <h4>Publisher: {this.state.game.publisher.name}</h4>
              <h4>Developer: {this.state.game.developer.name}</h4>
              <h4>Console:</h4>
              <ul>
                {this.consoleRender()}
              </ul>
            </div>
            {this.props.auth0.user ? <AddGame game={this.state.game} /> : <div></div>}
          </div>
        </div>
      )
    } else return (<></>)
  }
}

export default withAuth0(GameShow);
