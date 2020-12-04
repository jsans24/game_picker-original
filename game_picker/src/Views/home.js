import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/homepageButton";
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

  renderButton = () => {
    if(this.state.user && this.state.usersCollection.length) return <Randomizer usersCollection={this.state.usersCollection}/>
    else if(this.state.user) return <Link to="/games" className="btn btn-secondary">Build Your Collection</Link>
    else return <HomeButton />
  }

  render() {
    return(
    <>
    <img src="https://wallpapercave.com/wp/BFFsnBO.jpg" alt="controller" className="landing-background" />
    <h1 className="main-title">Welcome To Game Picker</h1>
    <div className="blurb">
      <h3>Let us Pick a Game For You</h3>
      {this.renderButton()}
    </div>
    </>
    )
  }
}

export default withAuth0(Home);
