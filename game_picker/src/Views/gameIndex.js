import React from "react";
import { Link } from "react-router-dom";
import GameModel from "../models/game";

class GameIndex extends React.Component {
  state= {
    games: [],
    search: "",
  }

  componentDidMount() {
    GameModel.all().then((res) => {
      this.setState({
        games: res.data.games,
      });
    });
  };

  handleSearch = async (event) => {
    this.setState({ search: event.target.value || "" })
    console.log(this.state);

    const searchResults = await this.filterByValue(this.state.games, this.state.search)
    
    
    return this.setState({ searchedGames: searchResults })
  }
  
  filterByValue = (array, string) => {
    if (!string) {
      return array;
    }

    return array.filter((game) => {
      const gameTitle = game.title.toLowerCase();
      return gameTitle.includes(string);
    })
  }

  gamesList = () => {
    return this.state.searchedGames ?
      this.state.searchedGames.map((game) => (
        <Link key={game._id} to={`/games/${game._id}`}><li>{game.title}</li></Link>
      )) :
      this.state.games.map((game) => (
        <Link key={game._id} to={`/games/${game._id}`}><li>{game.title}</li></Link>
      ))
  }

  render() {
    
    return (
      <>
      <form><input type="text" placeholder="Search" onChange={this.handleSearch}/></form>
        <ul>
          {this.gamesList()}
        </ul>
      </>
    )
  }
}

export default GameIndex;
