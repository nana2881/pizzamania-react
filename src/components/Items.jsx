import React from "react";

class Items extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="thumbnail">
          <img src={this.props.imgSrc} alt="Perpperoni" height="10vh" />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
