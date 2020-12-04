import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Randomizer = (props) => {

  const pickRandomGame = () => {
    const randomNum =  Math.floor(Math.random() * (props.usersCollection.length))
    const randomGame = props.usersCollection[randomNum]
    console.log(randomGame);
    return window.location.replace(`http://localhost:3000/games/${randomGame.game._id}`)
  }

  return (
    <div>
      <button onClick={pickRandomGame}>Hello</button>
    </div>
  )
}

export default Randomizer;
