import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import UsersGameModel from "../models/usersGame";

class Profile extends React.Component {

  state = {
    user: this.props.auth0.user,
    usersCollection: [],
  }

  componentDidMount() {
    this.fetchData()
    
  }

  fetchData = async () => {
    const usersCollection = await UsersGameModel.findCollection(this.state.user.sub)

    return this.setState({ usersCollection: usersCollection.data.game });
  }

  
  render() {
    const renderCollection = this.state.usersCollection.map((game) => {
      console.log(game);
      return (
        <Link to={`/games/${game.game._id}`}>
          <div className="col mb-4" key={game._id}>
            <div className="card">
              <img src={game.game.img} className="card-img-top" alt={game.game.title} />
              <div className="card-body">
                <h5 className="card-title">{game.game.title}</h5>
              </div>
            </div>
          </div>
        </Link>
      )
    })
    console.log(renderCollection);
    console.log(this.state);
    return (
      <div>
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={this.state.user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{this.state.user.nickname}</h2>
            <p className="lead text-muted">{this.state.user.email}</p>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3">
          {renderCollection}
        </div>
      </div>
    );
  }
};

export default withAuth0(Profile);
