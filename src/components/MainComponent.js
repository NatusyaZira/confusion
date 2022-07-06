import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
      selectedDish: null
    };
  }

  onDishSelect(dish) {
     this.setState({ selectedDish: dish});
  }

  render() {
    return (
      <div className="App">
      <Navbar color="primary" dark>
      <div className="container">
      <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={} />
      </div>
    );
  }
}

export default App;
