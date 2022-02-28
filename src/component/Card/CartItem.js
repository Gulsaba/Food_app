import React from 'react'
import './Cartitem.css'

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className='CartItemList'>
      <div className='container'>
      <div className='items'>
        <h3 className='itemName'>{props.name}</h3>
        <span className='Price'>{props.price}</span>
        <span className='amount'>x{props.amount}</span> 
      
      </div>
      <div>
        <button className= 'btn' onClick={props.onRemove}>−</button>
        <button className= 'btn' onClick={props.onAdd}>+</button>
      </div>
      </div>
    </li>
  );
};

export default CartItem;
