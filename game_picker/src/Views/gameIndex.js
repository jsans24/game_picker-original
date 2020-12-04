import React from "react";
import { Link } from "react-router-dom";
import GameModel from "../models/game";

class GameIndex extends React.Component {
  state= {
    games: [],
    search: "",
    setSearch: "",
  }

  componentDidMount() {
    GameModel.all().then((res) => {
      this.setState({
        games: res.data.games,
      });
    });
  };


  // https://dev.to/iam_timsmith/lets-build-a-search-bar-in-react-120j
  handleSearch = (event) => {
    // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];

        // If the search bar isn't empty
    if (event.target.value !== "") {
            // Assign the original list to currentList
      currentList = this.state.games;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(item => {
                // change current item to lowercase
        const lc = item.title.toLowerCase();
                // change search term to lowercase
        const filter = event.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  gamesList = () => {
    return this.state.filtered ?
      this.state.filtered.map((game) => (
        <Link key={game._id} to={`/games/${game._id}`}><li>{game.title}</li></Link>
      )) :
      this.state.games.map((game) => (
        <Link key={game._id} to={`/games/${game._id}`}><li>{game.title}</li></Link>
      ))
  }

  render() {
    
    return (
      <>
        <div className="searchFilter">
          
        </div>
        <form><input type="text" placeholder="Search" onInput={this.handleSearch}/></form>
        <ul>
          {this.gamesList()}
        </ul>
      </>
    )
  }
}

export default GameIndex;
