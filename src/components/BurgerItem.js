import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        {props.burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={(e) => props.handleShowInfo(e, props.burger)}>Show</button>
        <button onClick={() => props.handleDeleteBurger(props.burger)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
