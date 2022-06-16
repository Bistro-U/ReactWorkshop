import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { DISHES } from "./shared/dish";
import Menu from "./components/MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />;
      </div>
    );
  }
}
export default App;
