import React, { Component } from 'react';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgers: [],
    filteredBurgers: [],
    burgerInfo: null
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/burgers')
      .then(resp => resp.json())
      .then(burgers => this.setState({burgers, filteredBurgers: burgers}))
  }

  handleShowInfo = (e, burger) => {
    console.log(burger);
    this.setState({
      burgerInfo: burger
    })
  }

  handleFilter = (e) => {
    const filteredArr = [...this.state.burgers].filter(burger => burger.category === e.target.value)
    if(e.target.value === 'All') {
      this.setState({
        filteredBurgers: this.state.burgers
      })
    } else {
      this.setState({
        filteredBurgers: filteredArr
      })
    }
  }

  handleChangeCategory = (e, burgerObj) => {
    burgerObj.category = e.target.value
    this.setState({
      burgerInfo: burgerObj
    })
  }

  handleDeleteBurger = (burgerObj) => {
    const deleteBurgerArr = [...this.state.burgers].filter(burger => burger.id !== burgerObj.id)
    const deleteBurgerFilterArr = [...this.state.filteredBurgers].filter(burger => burger.id !== burgerObj.id)
    this.setState({
      burgers: deleteBurgerArr,
      filteredBurgers: deleteBurgerFilterArr
    })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.filteredBurgers} handleShowInfo={this.handleShowInfo} handleFilter={this.handleFilter} handleDeleteBurger={this.handleDeleteBurger} />
        {this.state.burgerInfo ? <BurgerDisplay burger={this.state.burgerInfo} handleChangeCategory={this.handleChangeCategory} /> : null}
      </div>
    );
  }
}

export default App;
