import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Redirect } from "react-router-dom";
import UsersGameModel from "../models/usersGame";

class GameCard extends React.Component {
  
  state = {
    game: this.props.game._id,
    profile: this.props.auth0.user.sub,
    ownedPlatforms: [],
    archived: false,
    usersCopy: [],
  }

  
  componentDidMount() {
    this.checkDB()
  }

  refreshPage = () => (
    window.location.reload()
  )

  checkDB = async () => {
    const usersCopyData = await UsersGameModel.find(this.state.game, this.state.profile)

    return usersCopyData.data.usersGames ?
      this.setState({
        usersCopy: usersCopyData.data.usersGames,
        ownedPlatforms: usersCopyData.data.usersGames.ownedPlatforms,
        archived: usersCopyData.data.usersGames.archived,
      })
    :
      this.setState({
        usersCopy: null,
      })
    
  }

  updateCopy = async () => {
    const updateCopy = await UsersGameModel.update(this.state.usersCopy, this.state)

    console.log(updateCopy);

    return this.checkDB()
    }

  deleteUsersGame = async (event) => {
    event.preventDefault();
    const deletedGame = await UsersGameModel.delete(this.state.usersCopy)
    this.setState({ usersCopy: [] })
    return this.checkDB()
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const create = await UsersGameModel.create(this.state)
    
    return this.checkDB()
    
    // return this.refreshPage()
  }
  
  choiceRender = () => {
    const consoleList = this.props.game.platforms.map((platform) => {
      const checkbox = () => {
        console.log(this.state.ownedPlatforms)
        const arr = this.state.ownedPlatforms
        const i = arr.indexOf(platform)
        arr.includes(platform._id) ?
          arr.splice(i, 1)
        : arr.push(platform._id)
        return this.setState({ ownedPlatforms: arr })
      }
      return (
        <div key={platform._id}>
          <input 
            type="checkbox" 
            name="consoles" 
            className="consoleChoice"
            checked={this.state.ownedPlatforms.includes(platform._id)}
            onChange={checkbox}
          /> 
          <label>{platform.name}</label>
        </div>
      )
    })

    const archiveCheck = () => {
      this.state.archived ? this.setState({ archived: false }) : this.setState({ archived: true })
    }

    const archiveButton = (
      <div>
        <input 
        type="checkbox" 
        name="consoles" 
        className="consoleChoice"
        checked={this.state.archived}
        onChange={archiveCheck}
        /> 
        <label>Archived</label>
      </div>
    )

    return (
      <>
      {consoleList}
      {archiveButton}
      </>
    )
  }

  render() {
    console.log(this.state);

    

    return(
      <div className="card dk-card">
        <div className="card-header">
          {this.props.game.title}
        </div>
        <div className="card-body">
          <form onSubmit={this.state.usersCopy ? this.deleteUsersGame : this.handleSubmit}>
            {this.choiceRender()}
            {this.state.usersCopy ? <input type="button" onClick={this.updateCopy} value="Update Owned Copy"/> : null}
            <input type="submit" value={this.state.usersCopy ? "Remove From Your Collection" : "Add To Your Collection"} />
          </form>
        </div>
      </div>
    )
  }
}

export default withAuth0(GameCard);
