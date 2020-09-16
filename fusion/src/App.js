import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import { Menu } from "./Components/MenuComponent";
import './App.css';
import { DISHES } from "./shared/dishes";

class App extends Component{

  constructor(props) {
    super(props);
    /*
    This is called state lifting. We lifted it from the child to the parent component
    so that many children can have acces to it through the props attribute
    */
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
    </div>
  );
  }
}

export default App;