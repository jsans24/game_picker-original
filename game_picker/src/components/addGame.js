import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Redirect } from "react-router-dom";
import UsersGameModel from "../models/usersGame";

class AddGame extends React.Component {
  
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

  checkDB = async () => {
    const usersCopyData = await UsersGameModel.find(this.state.game, this.state.profile)

    return this.setState({ usersCopy: usersCopyData.data.usersGames })
  }

  deleteUsersGame = async (event) => {
    event.preventDefault();
    const deletedGame = await UsersGameModel.delete(this.state.usersCopy[0])
    return this.setState({ usersCopy: [] })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    UsersGameModel.create(this.state)

    return <Redirect to="/profile" />
  }

  render() {
    console.log(this.state);
    const choiceRender = () => {
    if(!this.state.usersCopy.length){
        const consoleList = this.props.game.platforms.map((platform) => {
          const checkbox = () => {
            console.log(this.state.ownedPlatforms);
            if(this.state.ownedPlatforms.includes(platform._id)) {
              this.state.ownedPlatforms.splice(this.state.ownedPlatforms.indexOf(platform._id), 1)
            } else this.state.ownedPlatforms.push(platform._id)
          }
          return <div key={platform._id}>
            <input 
              type="checkbox" 
              name="consoles" 
              className="consoleChoice"
              onChange={checkbox}
            /> 
            <label>{platform.name}</label>
          </div>
        })
    
        return consoleList;
      }
    }

    

    return(
      <div className="card">
        <div className="card-header">
          {this.props.game.title}
        </div>
        <div className="card-body">
          <form onSubmit={this.state.usersCopy.length ? this.deleteUsersGame : this.handleSubmit}>
            {choiceRender()}
            <input type="submit" value={this.state.usersCopy.length ? "Remove From Your Collection" : "Add To Your Collection"} />
          </form>
        </div>
      </div>
    )
  }
}

export default withAuth0(AddGame);