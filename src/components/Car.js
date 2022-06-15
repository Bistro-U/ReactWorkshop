import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeColor = () => {
    this.setState({ color: "yellow" });
  };

  start = (e) => {
    alert("Your car is ready by " + e.type);
  }

  render() {
    return (
      <div>
        <h2>My {this.state.brand}</h2>;
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}
        </p>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
        <button type="button" onClick={this.start} >
            start
        </button>
      </div>
    );
  }
}

export default Car;
