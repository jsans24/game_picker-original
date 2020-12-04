import React from "react";
import loadingImg from "../images/Spinner-1.3s-201px.gif";

class Loading extends React.Component {
  render() {
    return (
      <div className="">
        <img className="loader" src={loadingImg} alt="Loading..." />
      </div>
    );
  }
}

export default Loading;
