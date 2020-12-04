import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import Randomizer from "../components/randomizer";
import UsersGameModel from "../models/usersGame";

class Home extends React.Component {
  state = {
    user: this.props.auth0.user,
    usersCollection: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    if(this.state.user){
      const usersCollection = await UsersGameModel.findCollection(this.state.user.sub)

      return this.setState({ usersCollection: usersCollection.data.game });
    }
  }

  render() {
    return(
    <>
    <h1>Home Page</h1>
    {this.props.auth0.user ? <Randomizer usersCollection={this.state.usersCollection} /> : <div></div>}
    </>
    )
  }
}

export default withAuth0(Home);
