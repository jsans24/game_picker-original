import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
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
      </div>
    );
  }
};

export default withAuth0(Profile);
