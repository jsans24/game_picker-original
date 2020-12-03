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
  }

  
  componentDidMount() {
    console.log(this.state);
  }

  checkDB = (param1, param2) => {
    let request = axios.get('http://localhost:4000/usersgames?game=' +  param1 + '');
    return request;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    UsersGameModel.create(this.state)

    return <Redirect to="/profile" />
  }

  render() {
    console.log(this.props);
    const choiceRender = () => {
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

    

    return(
      <div class="card">
        <div class="card-header">
          {this.props.game.title}
        </div>
        <div class="card-body">
          <form onSubmit={this.handleSubmit}>
            {choiceRender()}
            <input type="submit" value="Add To Your Collection" />
          </form>
        </div>
      </div>
    )
  }
}

export default withAuth0(AddGame);