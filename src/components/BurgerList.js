import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  let cards = props.burgers.map(burgerObj => <BurgerItem key={burgerObj.id} burger={burgerObj} handleShowInfo={props.handleShowInfo} handleDeleteBurger={props.handleDeleteBurger} />)
  return (
    <div className="BurgerList">
      {cards}
    </div>
  )
}

export default BurgerList
